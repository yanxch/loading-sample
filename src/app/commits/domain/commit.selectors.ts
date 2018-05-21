import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Commit } from "./commit";
import { AppState } from "../../app.module";

export const commitsSelector = (state: AppState) => state.commits.commits;
export const usernameParamSelector = (state: AppState) => state.router.state.root.paramMap.get('username');

@Injectable()
export class CommitSelectors {
    constructor(private store: Store<any>) {}

    selectUsername(): Observable<string> {
        return this.store.select(usernameParamSelector);
    }

    selectCommits(): Observable<Commit[]> {
        return this.store.select(commitsSelector);
    }
}