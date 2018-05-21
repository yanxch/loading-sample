import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Commit } from '../domain/commit';
import { CommitService } from '../services/commit.service';
import { Observable } from 'rxjs/Observable';
import { CommitActions } from '../domain/commit.actions';
import { CommitSelectors } from '../domain/commit.selectors';
import { take } from 'rxjs/operators';

@Component({
    selector: 'commits-container',
    templateUrl: './commits.container.html',
    styleUrls: ['./commits.container.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsContainer implements OnInit {
    username$: Observable<string>;
    commits$: Observable<Commit[]>;

    username: string = 'yanxch';

    constructor(private actions: CommitActions,
                private selectors: CommitSelectors) {

        this.commits$ = this.selectors.selectCommits();
        this.username$ = this.selectors.selectUsername();
            
        this.username$
            .pipe(take(1))
            .subscribe(u => this.username = u);

        this.actions.loadCommits({username: this.username});
    }

    ngOnInit() {
    }
}