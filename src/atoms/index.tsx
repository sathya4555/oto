import { atom } from "recoil";

export const isOnboardingDoneRecoil = atom({
  key: "isOnboardingDoneRecoil",
  default: false,
});

export const roomIdRecoil = atom({
  key: "roomIdRecoil",
  default: "" as string,
});
