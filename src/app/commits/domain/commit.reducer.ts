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

    if (isAction(action, CommitActions.loadCommitsFailure)) {
        const commits = [];
        return {
            ...state,
            commits
        };
    }

    return state;
}