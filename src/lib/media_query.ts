import { readable } from 'svelte/store';

export const useMediaQuery = (mediaQueryString: string) => {
  const matches = readable(false, set => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    set(mediaQueryList.matches);
    const listener = (m: MediaQueryListEvent) => set(m.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  });
  return matches;
};
