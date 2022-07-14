import {
  ActionTypes,
  InputAction,
  InputState,
  Reducer,
} from "./user-input-types";

import { ChangeEventHandler, FocusEventHandler, useReducer } from "react";

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, value: action.payload.value };
    case "BLUR":
      return { ...state, isDirty: true };
    case "RESET":
      return { ...state, value: "", isDirty: false };
  }
  return state;
};

const initialState: InputState = {
  value: "",
  isDirty: false,
};

const useInput = (validator: (val: string) => boolean) => {
  /*#TA01 */
  const [state, dispatch] = useReducer(reducer, initialState);

  const valIsValid = validator(state.value);
  const hasError = !valIsValid && state.isDirty;

  const valueChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const action: InputAction = {
      type: ActionTypes.INPUT,
      payload: { value: event.target.value },
    };
    dispatch(action);
  };

  const inputBlurHandler: FocusEventHandler<HTMLInputElement> = (_) => {
    dispatch({ type: ActionTypes.BLUR });
  };

  const reset = () => {
    dispatch({ type: ActionTypes.RESET });
  };

  return [
    state.value,
    valIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  ] as const;
};

export default useInput;
