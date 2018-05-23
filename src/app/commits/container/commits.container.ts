import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Commit } from '../domain/commit';
import { CommitService } from '../services/commit.service';
import { Observable } from 'rxjs/Observable';
import { CommitActions } from '../domain/commit.actions';
import { CommitSelectors } from '../domain/commit.selectors';
import { take } from 'rxjs/operators';
import { untilComponentDestroyed } from '../../utils/componetDestroyed';

@Component({
    selector: 'commits-container',
    templateUrl: './commits.container.html',
    styleUrls: ['./commits.container.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsContainer implements OnInit, OnDestroy {
    username$: Observable<string>;
    commits$: Observable<Commit[]>;

    constructor(private actions: CommitActions,
                private selectors: CommitSelectors) {

        this.commits$ = this.selectors.selectCommits();
        this.username$ = this.selectors.selectUsername();

    }

    ngOnInit() {            
        this.username$
            .pipe(untilComponentDestroyed(this))
            .subscribe(username => {
                this.actions.loadCommits({ username });
            });
    }

    ngOnDestroy() {}
}