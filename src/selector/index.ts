import {StateType} from "../types";

export const commonSelector = (state: StateType) => state;

export const modalWindowSelector = (state: StateType): boolean =>
    state.modalWindow;
export const modalWindowDataIdSelector = (state: StateType): number =>
    state.modalWindowDataId;
