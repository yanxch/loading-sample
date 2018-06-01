import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { User } from '../commits/domain/user';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*              TYPES                           */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
type Type = {
    readonly type: string;
}

type Payload<T> = {
    readonly payload: T;
}

type Action<T>  = Type & Payload<T>;

type ActionCreator<T> = {
    (payload: T): Action<T>;
};

type TypedActionCreator<T> = Type & ActionCreator<T>;

type BoundActionCreator<T> = (payload: T) => void;

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*              FACTORY FUNCTIONS               */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function createType(type: string): Type {
    return { type };
}

function createPayload<T>(payload: T): Payload<T> {
    return { payload };
}

function createAction<T>(type: Type, payload: Payload<T>): Action<T> {
    return { 
        type: type.type,
        payload: payload.payload
    };
}

function createActionCreator<T>(type: Type): TypedActionCreator<T> {
    const actionCreator = (payload: T) => createAction(type, createPayload(payload)); 
    (actionCreator as any).type = type.type;
    return actionCreator as TypedActionCreator<T>;    
}

function createBoundActionCreator<T>(actionCreator: ActionCreator<T>, dispatchFn): BoundActionCreator<T> {
    return (payload: T) => {
        const action = actionCreator(payload);
        dispatchFn(action);   
    };
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*              TYPE GUARDS                     */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function isType<T>(action: Action<any>, ...expectedAction: Action<T>[]): action is Action<T> {
    return expectedAction.some(e => e.type === action.type)
}

function isAction<T>(action: Action<any>, ...expectedActionCreator: TypedActionCreator<T>[]): action is Action<T> {
    return expectedActionCreator.some(e => e.type === action.type);
}

export {
    Type, Payload, Action,
    TypedActionCreator,
    createType,
    createPayload,
    createAction,
    createActionCreator,
    createBoundActionCreator,
    isType,
    isAction
};
