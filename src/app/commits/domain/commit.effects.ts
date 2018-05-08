import { Injectable } from "@angular/core";
import { CommitService } from "../services/commit.service";
import { Effect, Actions } from '@ngrx/effects';
import { LOAD_COMMITS, CommitActions } from "./commit.actions";

import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

@Injectable()
export class CommitEffects {

    constructor(private actions$: Actions,
                private commitService: CommitService) {}

    @Effect()
    loadCommits$ = this.actions$.ofType(LOAD_COMMITS)   // write own operator that returns correct type
        .pipe(
            map((action: any) => action.payload.username),
            switchMap(username => {
                return this.commitService.readCommitsByUsername(username)
                    .pipe(
                        map(commits => CommitActions.loadCommitsSuccess(commits)),
                        catchError(error => of(CommitActions.loadCommitsFailed(error)))
                    )
                })
        );
}