/*import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, ...expectedAction: PayloadAction<T>[]): action is PayloadAction<T> {
    return expectedAction.some(e => e.type === action.type)
}

export function isAction<T>(action: PayloadAction<any>, ...expectedActionCreator: ActionCreator<T>[]): action is PayloadAction<T> {
    return expectedActionCreator.some(e => e.type === action.type);
}

export function createType<T>(type: string): ActionType<T> {
    return { type };
}

export function createAction<T>(type: ActionType<T>, payload: T): PayloadAction<T> {
    return { type: type.type, payload };
}

export function createActionCreator<T>(type: ActionType<T>): ActionCreator<T> {
    const creator: ActionCreator<T> = (payload: T) => createAction(type, payload);
    creator.type = type.type;
    return creator;
}

export function bindActionCreator<T>(actionCreator: ActionCreator<T>, dispatchFn): BoundActionCreator<T> {
    return (payload: T) => {
        const a = actionCreator(payload);
        dispatchFn(a);
    };
}

export type ActionType<T> = {
    readonly type: string;
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

export interface ActionCreator<T> {
    (payload: T): PayloadAction<T>;
    type?: string;
}

export interface BoundActionCreator<T> {
    (payload: T): void; // void == side effect
}*/
