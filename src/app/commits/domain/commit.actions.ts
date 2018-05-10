import { Action, Store } from '@ngrx/store';
import { User } from './user';
import { Commit } from './commit';
import { Injectable } from '@angular/core';
import { bindActionFn, action, actionFn } from '../../state/actions';

export const LOAD_COMMITS =             '[Commits] Load Commits';
export const LOAD_COMMITS_SUCCESS =     '[Commits] Load Commits Success';
export const LOAD_COMMITS_FAILED =      '[Commits] Load Commits Fail';

@Injectable()
export class CommitActions {
    //
    // Action - action
    //
    static readonly LOAD_COMMITS = action<Pick<User, 'username'>>(LOAD_COMMITS);
    static readonly LOAD_COMMITS_SUCCESS = action<Commit[]>(LOAD_COMMITS_SUCCESS);
    static readonly LOAD_COMMITS_FAILED = action(LOAD_COMMITS_FAILED);
    //
    // Command / Event
    //
    static readonly loadCommits = actionFn(CommitActions.LOAD_COMMITS);
    static readonly loadCommitsSuccess = actionFn(CommitActions.LOAD_COMMITS_SUCCESS);
    static readonly loadCommitsFailed = actionFn(CommitActions.LOAD_COMMITS_FAILED);
    //
    constructor(private store: Store<any>) {}
    //
    // Bound Commond
    //
    loadCommits = bindActionFn(CommitActions.loadCommits, this.store.dispatch.bind(this.store));
}
