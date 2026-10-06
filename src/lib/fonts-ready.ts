/**
 * Resolves when web fonts are ready — or after `timeout` ms, whichever comes
 * first — so text animations never sit hidden waiting on a slow font.
 * SplitText's `autoSplit` re-splits cleanly if a font lands later.
 */
export function fontsReady(timeout = 700): Promise<void> {
  if (typeof document === "undefined" || !document.fonts) return Promise.resolve();
  if (document.fonts.status === "loaded") return Promise.resolve();
  return Promise.race([
    document.fonts.ready.then(() => undefined),
    new Promise<void>((resolve) => setTimeout(resolve, timeout)),
  ]);
}
