import { Injectable } from "@angular/core";
import { CommitService } from "../services/commit.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommitActions } from "./commit.actions";

import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { OperatorFunction, MonoTypeOperatorFunction } from "rxjs/interfaces";
import { Action, TypedActionCreator } from "../../state";


// Custom RXJS Operator
function isAction<T extends Action<F>, F>(...actionCreators: TypedActionCreator<F>[]): MonoTypeOperatorFunction<Action<F>> {
    return filter((action: Action<F>): action is T => {
        return actionCreators.some(fn => fn.type === action.type);
    });
}

@Injectable()
export class CommitEffects {

    constructor(private actions$: Actions,
                private commitService: CommitService) {}

    @Effect()
    loadCommits$ = this.actions$   
        .pipe(
            isAction(CommitActions.LoadCommits),
            map((action) => action.payload.username),
            switchMap(username => {
                return this.commitService.readCommitsByUsername(username)
                    .pipe(
                        map(commits => CommitActions.LoadCommitsSuccess(commits)),
                        catchError(error => of(CommitActions.LoadCommitsFailure(error)))
                    )
                })
        );
}