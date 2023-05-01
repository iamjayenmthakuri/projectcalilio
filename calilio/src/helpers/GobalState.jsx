import { atom, selector } from "recoil";

export const hideModeState = atom({
  key: "hideModeState",
  default: false,
});

export const toggleHideModeState = selector({
  key: "hideModeToggle",
  get: ({ get }) => {
    const currentValue = get(hideModeState);
    return currentValue;
  },
  set: ({ get, set }) => {
    const currentValue = get(hideModeState);
    set(hideModeState, !currentValue);
  },
});

export const secondHideState = atom({
  key: "secondHideState",
  default: false,
});

export const toggleSecondHideModeState = selector({
  key: "secondHideToggle",
  get: ({ get }) => {
    const currentValue = get(secondHideState);
    return currentValue;
  },
  set: ({ get, set }) => {
    const currentValue = get(secondHideState);
    set(secondHideState, !currentValue);
  },
});
