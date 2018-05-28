import { Injectable } from "@angular/core";
import { Store, createFeatureSelector, createSelector, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Commit } from "./commit";
import { AppState } from "../../app.module";
import { RouterStateUrl } from "../../state/router";
import { take } from "rxjs/operators";


// Selectors - Pure Functions
export const commitsSelector = (state: AppState) => state.commits.commits;

export const routeSelector = createFeatureSelector('router');
export const routeParamSelector = (paramName: string) => (router: any) => router.state && router.state.params[paramName];

export const usernameSelector = createSelector(
    routeSelector,
    routeParamSelector('username')
);

@Injectable()
export class CommitSelectors {
    constructor(private store: Store<any>) {}

    selectUsername(): Observable<string> {
        return this.store.select(usernameSelector);
    }

    selectCommits(): Observable<Commit[]> {
        return this.store.select(commitsSelector);
    }
}