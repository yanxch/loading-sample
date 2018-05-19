import { Action, Store } from '@ngrx/store';
import { User } from './user';
import { Commit } from './commit';
import { Injectable } from '@angular/core';
import { bindActionFunction, createAction, createActionFunction } from '../../state/actions';

export const LOAD_COMMITS =             '[Commits] Load Commits';
export const LOAD_COMMITS_SUCCESS =     '[Commits] Load Commits Success';
export const LOAD_COMMITS_FAILED =      '[Commits] Load Commits Fail';

@Injectable()
export class CommitActions {
    //
    // Action Definitions
    //
    static readonly LOAD_COMMITS = createAction<Pick<User, 'username'>>(LOAD_COMMITS);
    static readonly LOAD_COMMITS_SUCCESS = createAction<Commit[]>(LOAD_COMMITS_SUCCESS);
    static readonly LOAD_COMMITS_FAILED = createAction(LOAD_COMMITS_FAILED);
    //
    // Action Functions
    //
    static readonly loadCommits = createActionFunction(CommitActions.LOAD_COMMITS);
    static readonly loadCommitsSuccess = createActionFunction(CommitActions.LOAD_COMMITS_SUCCESS);
    static readonly loadCommitsFailed = createActionFunction(CommitActions.LOAD_COMMITS_FAILED);
    //
    constructor(private store: Store<any>) {}
    //
    // Action Bounded Functions
    //
    loadCommits = bindActionFunction(CommitActions.loadCommits, this.store.dispatch.bind(this.store));
}
