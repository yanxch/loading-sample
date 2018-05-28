import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, ...expected: PayloadAction<T>[]): action is PayloadAction<T> {
    return expected.some(e => e.type === action.type)
}

export function isAction<T>(action: PayloadAction<any>, ...expectedFn: ActionFunction<T>[]): action is PayloadAction<T> {
    return expectedFn.some(e => e.type === action.type);
}

export function createAction<T>(type: string): PayloadAction<T> {
    return { type };
}

export function createActionFunction<T>(action: PayloadAction<T>): ActionFunction<T> {
    const fn: any =  (payload: T) => ({ type: action.type, payload});
    fn.type = action.type;
    return fn as ActionFunction<T>;
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
    type: string;
}

export interface BoundActionCreator<T> {
    (payload: T): void; // void == side effect
}
