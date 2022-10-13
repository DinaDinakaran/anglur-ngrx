import { Action } from "@ngrx/store";

export enum counterAction{
    INC = "[COUNT] INC ",
    DEC ="[COUNT] DEC",
    RESET ="[COUNT] RESET"
}

export class IncCount implements Action
{
       readonly type = counterAction.INC;
}
export class DecCount implements Action
{
    readonly type = counterAction.DEC;
}
export class ResCount implements Action
{
 readonly type = counterAction.RESET  
}