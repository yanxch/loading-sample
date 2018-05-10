import { Injectable } from "@angular/core";
import { CommitService } from "../services/commit.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LOAD_COMMITS, CommitActions } from "./commit.actions";

import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { OperatorFunction } from "rxjs/interfaces";
import { TypedAction, PayloadAction } from "../../state/actions";

function isType<T extends TypedAction<any>>(
    actionType: T
): OperatorFunction<PayloadAction<T>, T> {
    return filter((action: PayloadAction<T>): action is T => actionType.type === action.type);
}

@Injectable()
export class CommitEffects {

    constructor(private actions$: Actions,
                private commitService: CommitService) {}

    @Effect()
    loadCommits$ = this.actions$   
        .pipe(
            isType(CommitActions.LOAD_COMMITS),
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