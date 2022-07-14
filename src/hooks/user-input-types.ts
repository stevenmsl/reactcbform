export type InputState = {
  value: string;
  isDirty: boolean;
};

export enum ActionTypes {
  INPUT = "INPUT",
  BLUR = "BLUR",
  RESET = "RESET",
}

export interface InputAction {
  type: ActionTypes.INPUT;
  payload: { value: string };
}

export interface BlurAction {
  type: ActionTypes.BLUR;
}

export interface ResetAction {
  type: ActionTypes.RESET;
}

export type Actions = InputAction | BlurAction | ResetAction;
export type Reducer = (state: InputState, action: Actions) => InputState;
