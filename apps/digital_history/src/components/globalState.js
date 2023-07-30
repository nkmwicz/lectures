import { atom, selector } from "recoil";

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
    return get(allSlidesState)[index];
  },
});
