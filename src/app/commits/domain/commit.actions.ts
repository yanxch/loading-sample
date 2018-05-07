import { Action, Store } from '@ngrx/store';
import { User } from './user';
import { Commit } from './commit';
import { Injectable } from '@angular/core';

export const LOAD_COMMITS =             '[Commits] Load Commits';
export const LOAD_COMMITS_SUCCESS =     '[Commits] Load Commits Success';
export const LOAD_COMMITS_FAILED =      '[Commits] Load Commits Fail';

@Injectable()
export class CommitActions {
    //
    // Action Types
    //
    static readonly LOAD_COMMITS = type<Pick<User, 'username'>>(LOAD_COMMITS);
    static readonly LOAD_COMMITS_SUCCESS = type<Commit[]>(LOAD_COMMITS_SUCCESS);
    static readonly LOAD_COMMITS_FAILED = type(LOAD_COMMITS_FAILED);
    //
    // Action Creator
    //
    static readonly loadCommits = action(CommitActions.LOAD_COMMITS);
    static readonly loadCommitsSuccess = action(CommitActions.LOAD_COMMITS_SUCCESS);
    static readonly loadCommitsFailed = action(CommitActions.LOAD_COMMITS_FAILED);
    //
    constructor(private store: Store<any>) {}
    //
    // Bound Actions
    //
    loadCommits = bindAction(CommitActions.loadCommits, this.store.dispatch);
}

/*@Injectable()
export class CommitEvents {
    loadCommitsSuccess = event<Commit[]>(LOAD_COMMITS_SUCCESS);
    loadCommitsFailed = event<Commit[]>(LOAD_COMMITS_FAILED);
}*/

/** Keep in mind:
bindAction<T>(type: string): BoundedAction<T> {
    return (payload: T) => this.store.dispatch({type, payload});
}

/*function action<T>(type: string): ActionCreator<T> {
    return (payload: T) => ({ type, payload });
}*/

// type BoundAction<T> = (payload?: T) => void;
// todo(christian): interface vs type ? 

export function isType<T>(action: PayloadAction<any>, typedAction: TypedAction<T>): action is PayloadAction<T> {
    return action.type === typedAction.type;
}

function type<T>(type: string): TypedAction<T> {
    return { type };
}

function action<T>(action: TypedAction<T>): ActionCreator<T> {
    return (payload: T) => ({ type: action.type, payload});
}

function bindAction<T>(action: ActionCreator<T>, dispatchFn): BoundedAction<T> {
    return (payload: T) => dispatchFn(action(payload));
}

function event<T>(type: string): EventCreator<T> {
    return (payload: T) => ({type, payload});
}

interface BoundedAction<T> {
    (payload: T): void; // void == side effect
}

interface ActionCreator<T> {
    (payload: T): PayloadAction<T>;
}

interface EventCreator<T> {
    (payload: T): Event<T>;
}

interface TypedAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

export interface PayloadAction<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}

interface Event<T> extends Action {
    readonly type: string;
    readonly payload?: T;
}