/**
 * Tiny signal shared between the Preloader and above-the-fold animations
 * so the hero plays exactly as the preloader finishes (or immediately on
 * repeat visits / reduced motion, when the preloader is skipped).
 */
let done = false;
const listeners = new Set<() => void>();

export function completeIntro() {
  if (done) return;
  done = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

export function onIntroComplete(fn: () => void) {
  if (done) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export const PRELOADER_SEEN_KEY = "ftc:preloader-seen";
