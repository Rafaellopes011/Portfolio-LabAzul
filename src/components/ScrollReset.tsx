"use client";

import { useEffect } from "react";

/**
 * Desliga a restauração de rolagem do navegador: com imagens e animações
 * ainda carregando, a posição restaurada "escorrega" a cada reload (sobretudo
 * no celular). A página abre sempre no topo, exceto quando há âncora (#secao).
 */
export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
