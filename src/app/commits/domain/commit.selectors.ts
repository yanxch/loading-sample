import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Commit } from "./commit";
import { AppState } from "../../app.module";

@Injectable()
export class CommitSelectors {
    constructor(private store: Store<any>) {}

    loadCommits(): Observable<Commit[]> {
        return this.store.select((state: AppState) => state.commits.commits);
    }
}