import {StateType} from "../types";
import {createRootReducer} from "../utils/createRootReducer";
import {changeModalWindowDataIdAction, changeModalWindowStateAction} from "../actions";

const initialState: StateType = {
    modalWindow: false,
    modalWindowDataId: 1,
}

const changeModalWindowStateReducer = (
    state: StateType,
    action: ReturnType<typeof changeModalWindowStateAction>
) => ({
    ...state,
    modalWindow: action.payload.params,
});

const changeModalWindowDataIdReducer = (
    state: StateType,
    action: ReturnType<typeof changeModalWindowDataIdAction>
) => ({
    ...state,
    modalWindowDataId: action.payload.params,
});


export const rootReducer = createRootReducer(initialState)([
    [changeModalWindowStateReducer, changeModalWindowStateAction],
    [changeModalWindowDataIdReducer, changeModalWindowDataIdAction]

])