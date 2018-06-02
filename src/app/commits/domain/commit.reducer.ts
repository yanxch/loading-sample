import { Commit } from './commit';
import { CommitActions } from './commit.actions';
import { Action, isAction } from '../../state';

export interface CommitState {
    commits: Commit[];
}

export const initialState: CommitState = {
    commits: []
};

export function reducer(state = initialState, action: Action<any>) {

    if (isAction(action, CommitActions.LoadCommits)) {
        return state;
    }

    if (isAction(action, CommitActions.LoadCommitsSuccess)) {
        const commits = [...action.payload];
        return {
            ...state,
            commits
        };
    }

    if (isAction(action, CommitActions.LoadCommitsFailure)) {
        const commits = [];
        return {
            ...state,
            commits
        };
    }

    return state;
}