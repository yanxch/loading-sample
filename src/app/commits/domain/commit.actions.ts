import { Action, Store } from '@ngrx/store';
import { User } from './user';
import { Commit } from './commit';
import { Injectable } from '@angular/core';
import { bindAction, action, type } from '../../state/actions';

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
    loadCommits = bindAction(CommitActions.loadCommits, this.store.dispatch.bind(this.store));
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

