import { Action } from '@ngrx/store';

export function isType<T>(action: PayloadAction<any>, typedAction: TypedAction<T>): action is PayloadAction<T> {
    return action.type === typedAction.type;
}

export function type<T>(type: string): TypedAction<T> {
    return { type };
}

export function action<T>(action: TypedAction<T>): ActionCreator<T> {
    return (payload: T) => ({ type: action.type, payload});
}

export function bindAction<T>(action: ActionCreator<T>, dispatchFn): BoundedAction<T> {
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

export interface TypedAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}
