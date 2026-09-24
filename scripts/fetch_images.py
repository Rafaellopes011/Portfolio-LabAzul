"""Baixa imagens de trabalho do Wikimedia Commons para public/images.

Fotos reais, licenciadas e tematicas (oceano, Ceara, mangue, pesca, laboratorio).
Os creditos ficam em public/images/CREDITS.json — mantenha-os ao publicar ou
substitua os arquivos pelo material fotografico oficial do Lab Azul.

Uso: python scripts/fetch_images.py [--force]
"""

import json
import os
import sys
import time
import urllib.parse
import urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "LabAzulSiteBuilder/1.0 (contact: labazul@unifor.br) python-urllib"
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "images")

# slot -> lista de buscas, em ordem de preferencia
SLOTS = {
    "ocean-hero": [
        "mar aberto horizonte oceano",
        "ocean sea horizon blue water photograph",
        "praia Ceara mar Brasil",
    ],
    "coast-aerial": ["Ceara coast aerial", "Brazil coastline aerial beach"],
    "cta-ocean": ["ocean waves breaking shore", "mar ondas praia Brasil"],
    "researchers": [
        "oceanographic research fieldwork scientists",
        "research vessel scientists deck",
        "field work river boat researchers",
    ],
    "mangrove": ["manguezal Ceara", "mangrove Brazil"],
    "coastal-tourism": ["jangada Ceara praia", "fishing boats beach Brazil"],
    "lab-biotech": [
        "laboratorio pesquisa universidade Brasil",
        "laboratory glassware research bench",
    ],
    "innovation": ["workshop meeting university Brazil", "conference workshop people"],
    "education-cover": ["environmental education children beach", "students beach field trip"],
    "fishing-community": ["artisanal fishing Ceara", "pescadores Brazil praia"],
    "women-community": [
        "artesa trabalhando Brasil",
        "mulheres oficina artesanato",
        "women weaving craft village",
    ],
    "smart-coco-cover": [
        "Parque do Coco Fortaleza",
        "manguezal rio Brasil aerea",
        "estuary river aerial Brazil",
    ],
    "smart-coco-1": ["Rio Coco mangue", "river estuary boat Brazil"],
    "smart-coco-2": ["manguezal rio agua Brasil", "mangrove creek water channel"],
    "smart-coco-3": [
        "pesquisador coleta agua rio",
        "limnology water sampling boat",
    ],
    "balbino-cover": [
        "Praia de Balbino Cascavel",
        "praia coqueiros Ceara",
        "beach palm trees village Brazil",
    ],
    "balbino-1": [
        "renda de bilro Ceara artesanato",
        "artesanato palha Brasil",
        "handicraft basket weaving",
    ],
    "balbino-2": [
        "mural comunidade Brasil arte",
        "grafite mural Brasil",
        "mural painting wall Brazil",
    ],
    "biotec-cover": ["seaweed aquaculture", "algae cultivation laboratory"],
    "biotec-1": ["macroalgae seaweed marine", "aquaculture fish farm"],
    "cabo-verde-cover": [
        "Cape Verde Sal beach sea",
        "Cabo Verde Santa Maria praia",
        "Cape Verde coastline ocean",
    ],
    "feminino-azul-cover": [
        "mulher pescadora rede",
        "marisqueira manguezal",
        "woman fisher net Africa",
    ],
}


def api(params):
    params = dict(params, format="json", formatversion="2")
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.load(response)


def search(term, limit=12):
    data = api(
        {
            "action": "query",
            "generator": "search",
            "gsrsearch": f"filetype:bitmap {term}",
            "gsrnamespace": "6",
            "gsrlimit": str(limit),
            "prop": "imageinfo",
            "iiprop": "url|size|mime|extmetadata",
            "iiurlwidth": "1800",
        }
    )
    return data.get("query", {}).get("pages", [])


BLOCK = (
    "fmib",
    "map",
    "engrav",
    "drawing",
    "diagram",
    "chart",
    "logo",
    "seal",
    "coat of arms",
    "poster",
    "stamp",
    "icon",
    "screenshot",
    "1900",
    "1910",
    "1920",
    "iss0",
    "nasa",
    "satellite",
    "space",
    "astronaut",
    "sea surface height",
    "modis",
    "landsat",
    "sentinel",
    "monument",
    "statue",
    "eddy",
)


def pick(pages):
    """Escolhe a foto de maior resolucao — descarta scans antigos e graficos."""
    best = None
    for page in pages:
        info = (page.get("imageinfo") or [{}])[0]
        title = (page.get("title") or "").lower()
        if not info.get("thumburl") or info.get("mime") != "image/jpeg":
            continue
        if any(word in title for word in BLOCK):
            continue
        width, height = info.get("width", 0), info.get("height", 0)
        if width < 2000 or height < 1300 or info.get("size", 0) < 900_000:
            continue
        score = width * height
        if not best or score > best[2]:
            best = (page, info, score)

    if best:
        return best[0], best[1]
    return None, None


def main():
    force = "--force" in sys.argv
    os.makedirs(ROOT, exist_ok=True)
    credits_path = os.path.join(ROOT, "CREDITS.json")
    credits = {}
    if os.path.exists(credits_path):
        with open(credits_path, encoding="utf-8") as handle:
            credits = json.load(handle)

    for slot, terms in SLOTS.items():
        target = os.path.join(ROOT, slot + ".jpg")
        if os.path.exists(target) and not force and slot in credits:
            print("ok (existe) ", slot)
            continue

        found = False
        for term in terms:
            time.sleep(1.2)  # respeita o rate limit da API do Commons
            try:
                page, info = pick(search(term, limit=25))
            except Exception as error:  # rede instavel
                print("erro busca ", slot, error)
                time.sleep(1)
                continue
            if not info:
                continue

            try:
                req = urllib.request.Request(
                    info["thumburl"], headers={"User-Agent": UA}
                )
                with urllib.request.urlopen(req, timeout=90) as response:
                    payload = response.read()
            except Exception as error:
                print("erro download", slot, error)
                continue

            with open(target, "wb") as handle:
                handle.write(payload)

            meta = info.get("extmetadata", {})
            credits[slot] = {
                "file": page.get("title"),
                "author": meta.get("Artist", {}).get("value", "")[:300],
                "license": meta.get("LicenseShortName", {}).get("value", ""),
                "source": info.get("descriptionurl"),
                "query": term,
            }
            print("baixado    ", slot, "<-", term)
            found = True
            break

        if not found:
            print("FALHOU     ", slot)

    with open(credits_path, "w", encoding="utf-8") as handle:
        json.dump(credits, handle, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
