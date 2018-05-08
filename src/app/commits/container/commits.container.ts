import { Component, OnInit } from '@angular/core';
import { Commit } from '../domain/commit';
import { CommitService } from '../services/commit.service';
import { Observable } from 'rxjs/Observable';
import { CommitActions } from '../domain/commit.actions';
import { CommitSelectors } from '../domain/commit.selectors';

@Component({
    selector: 'commits-container',
    templateUrl: './commits.container.html',
    styleUrls: ['./commits.container.scss']
})
export class CommitsContainer implements OnInit {
    commits: Observable<Commit[]>;

    constructor(private commitActions: CommitActions,
                private commitSelectors: CommitSelectors) {
        this.commitActions.loadCommits({username: 'mmalerba'});
    }

    ngOnInit() {
        this.commits = this.commitSelectors.loadCommits();
    }
}
  