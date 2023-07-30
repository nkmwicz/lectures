import { atom, selector } from "recoil";

// slide states

export const allSlidesState = atom({
  key: "allSlidesState",
  default: [],
});

export const slideIndexState = atom({
  key: "slideIndexState",
  default: 0,
});

export const slideState = selector({
  key: "slideState",
  get: ({ get }) => {
    const index = get(slideIndexState);
    const slides = get(allSlidesState);
    return slides[index];
  },
});

// Leaflet State

// Deck.GL State
