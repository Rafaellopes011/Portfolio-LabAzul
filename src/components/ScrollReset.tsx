/**
 * Desliga a restauração de rolagem do navegador: com imagens, fontes e
 * animações ainda carregando, a posição restaurada "escorrega" a cada reload
 * (sobretudo no celular). A página abre sempre no topo, exceto quando se
 * chega por um link com âncora (#secao) ou a pessoa já começou a rolar.
 * Num reload, vai ao topo mesmo com âncora — senão o "/#sobre" deixado por
 * um clique no menu faria a página reabrir sempre no meio.
 *
 * Roda como script inline no <head>, antes da hidratação — num useEffect
 * chegaria tarde demais, depois de o navegador já ter restaurado a posição.
 */
const script = `(function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  var reload = nav && nav.type === "reload";
  if (location.hash && !reload) return;
  if (location.hash) history.replaceState(history.state, "", location.pathname + location.search);
  var touched = false;
  var mark = function () { touched = true; };
  ["wheel", "touchstart", "keydown"].forEach(function (e) {
    addEventListener(e, mark, { once: true, passive: true });
  });
  var top = function () {
    if (!touched) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  top();
  addEventListener("DOMContentLoaded", top);
  addEventListener("load", top);
  addEventListener("pageshow", top);
})();`;

export function ScrollReset() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
