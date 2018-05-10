import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, expected: PayloadAction<T>): action is PayloadAction<T> {
    return action.type === expected.type;
}

export function action<T>(type: string): PayloadAction<T> {
    return { type };
}

export function actionFn<T>(action: PayloadAction<T>): ActionCreator<T> {
    return (payload: T) => ({ type: action.type, payload});
}

export function bindActionFn<T>(action: ActionCreator<T>, dispatchFn): BoundedAction<T> {
    return (payload: T) => {
        const a = action(payload);
        dispatchFn(a);
    };
}

export interface BoundedAction<T> {
    (payload: T): void; // void == side effect
}

export interface ActionCreator<T> {
    (payload: T): PayloadAction<T>;
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}
