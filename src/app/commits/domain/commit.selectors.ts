import { Injectable } from "@angular/core";
import { Store, createFeatureSelector, createSelector, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Commit } from "./commit";
import { AppState } from "../../app.module";
import { RouterStateUrl } from "../../state/router";
import { take } from "rxjs/operators";

export const commitsSelector = (state: AppState) => state.commits.commits;
export const usernameParamSelector = (state: AppState) => {
    return state.router.state.root.paramMap.get('username');
};

const getRouterState = createFeatureSelector('router');

const getUsernameRouterParam = createSelector(
    getRouterState,
    (router: any) => {
        return router.state && router.state.params && router.state.params.username;
    }
);

@Injectable()
export class CommitSelectors {
    constructor(private store: Store<any>) {}

    selectUsername(): Observable<string> {
        return this.store.pipe(
            select(getUsernameRouterParam),
            take(1)
        );
    }

    selectCommits(): Observable<Commit[]> {
        return this.store.select(commitsSelector);
    }
}