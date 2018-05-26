import { Commit } from './commit';
import { Action } from '@ngrx/store';
import { CommitActions } from './commit.actions';
import { PayloadAction, isType, isAction } from '../../state/actions';

export interface CommitState {
    commits: Commit[];
}

export const initialState: CommitState = {
    commits: []
};

export function reducer(state = initialState, action: PayloadAction<any>) {

    if (isAction(action, CommitActions.loadCommits)) {
        return state;
    }

    if (isAction(action, CommitActions.loadCommitsSuccess)) {
        const commits = [...action.payload];
        return {
            ...state,
            commits
        };
    }

    if (isAction(action, CommitActions.loadCommitsFailed)) {
        const commits = [];
        return {
            ...state,
            commits
        };
    }

    return state;
}