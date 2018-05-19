import { Commit } from './commit';
import { Action } from '@ngrx/store';
import { CommitActions } from './commit.actions';
import { PayloadAction, isType } from '../../state/actions';

export interface CommitState {
    commits: Commit[];
}

export const initialState: CommitState = {
    commits: []
};

export function reducer(state = initialState, action: PayloadAction<any>) {

    if (isType(action, CommitActions.LOAD_COMMITS)) {
        return state;
    }

    if (isType(action, CommitActions.LOAD_COMMITS_SUCCESS)) {
        const commits = [...action.payload];
        return {
            ...state,
            commits
        };
    }

    if (isType(action, CommitActions.LOAD_COMMITS_FAILED)) {
        const commits = [];
        return {
            ...state,
            commits
        };
    }

    return state;
}