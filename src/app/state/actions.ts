import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, expected: PayloadAction<T>): action is PayloadAction<T> {
    return action.type === expected.type;
}

export function createAction<T>(type: string): PayloadAction<T> {
    return { type };
}

export function createActionFunction<T>(action: PayloadAction<T>): ActionFunction<T> {
    return (payload: T) => ({ type: action.type, payload});
}

export function bindActionFunction<T>(action: ActionFunction<T>, dispatchFn): BoundActionCreator<T> {
    return (payload: T) => {
        const a = action(payload);
        dispatchFn(a);
    };
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

export interface ActionFunction<T> {
    (payload: T): PayloadAction<T>;
}

export interface BoundActionCreator<T> {
    (payload: T): void; // void == side effect
}
