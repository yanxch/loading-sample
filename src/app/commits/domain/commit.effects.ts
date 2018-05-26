import { Injectable } from "@angular/core";
import { CommitService } from "../services/commit.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommitActions } from "./commit.actions";

import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { OperatorFunction, MonoTypeOperatorFunction } from "rxjs/interfaces";
import { PayloadAction, ActionFunction } from "../../state/actions";
import { Action } from "rxjs/scheduler/Action";

// Custom RXJS Operator
/*function isType<T extends PayloadAction<any>>(actionType: T): MonoTypeOperatorFunction<T> {
    return filter((action: PayloadAction<T>): action is T => actionType.type === action.type);
}*/

function isAction<T extends PayloadAction<F>, F>(actionFn: ActionFunction<F>): MonoTypeOperatorFunction<PayloadAction<F>> {
    return filter((action: PayloadAction<F>): action is T => actionFn.type === action.type);
}

@Injectable()
export class CommitEffects {

    constructor(private actions$: Actions,
                private commitService: CommitService) {}

    @Effect()
    loadCommits$ = this.actions$   
        .pipe(
            isAction(CommitActions.loadCommits),
            map((action) => action.payload.username),
            switchMap(username => {
                return this.commitService.readCommitsByUsername(username)
                    .pipe(
                        map(commits => CommitActions.loadCommitsSuccess(commits)),
                        catchError(error => of(CommitActions.loadCommitsFailed(error)))
                    )
                })
        );
}