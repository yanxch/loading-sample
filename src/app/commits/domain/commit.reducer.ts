import { Commit } from './commit';
import { Action } from '@ngrx/store';
import { LOAD_COMMITS, LOAD_COMMITS_SUCCESS, PayloadAction, LOAD_COMMITS_FAILED, CommitActions, isType } from './commit.actions';

export interface CommitState {
    commits: Commit[];
}

export const initialState: CommitState = {
    commits: []
};

export function reducer(state = initialState, action: PayloadAction<any>) {

    if (isType(action, CommitActions.LOAD_COMMITS)) {
        console.log('Trying to load commit form user: ' + action.payload.username);
        return state;
    }

    return state;
}