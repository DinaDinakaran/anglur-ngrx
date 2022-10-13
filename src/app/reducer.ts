import { Action } from "@ngrx/store";
import * as myAction from "./action"



export const initialState =0;

export function counterreducer(state = initialState,action : Action){
 switch (action.type) {
    case myAction.counterAction.INC:
            return state+1;
    case myAction.counterAction.DEC:
        return state-1;
    case myAction.counterAction.RESET:
    return state = 0; 
 }
 return state; 
}

