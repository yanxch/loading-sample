import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, ...expectedAction: PayloadAction<T>[]): action is PayloadAction<T> {
    return expectedAction.some(e => e.type === action.type)
}

export function isAction<T>(action: PayloadAction<any>, ...expectedActionCreator: ActionCreator<T>[]): action is PayloadAction<T> {
    return expectedActionCreator.some(e => e.type === action.type);
}

export function createAction<T>(type: string): PayloadAction<T> {
    return { type };
}

export function createActionCreator<T>(action: PayloadAction<T>): ActionCreator<T> {
    const fn: any =  (payload: T) => ({ type: action.type, payload});
    fn.type = action.type;
    return fn as ActionCreator<T>;
}

export function bindActionCreator<T>(actionCreator: ActionCreator<T>, dispatchFn): BoundActionCreator<T> {
    return (payload: T) => {
        const a = actionCreator(payload);
        dispatchFn(a);
    };
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

export interface ActionCreator<T> {
    (payload: T): PayloadAction<T>;
    type: string;
}

export interface BoundActionCreator<T> {
    (payload: T): void; // void == side effect
}
