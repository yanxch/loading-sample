import { Component, OnInit } from '@angular/core';
import { Commit } from '../domain/commit';
import { CommitService } from '../services/commit.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'commits-container',
    templateUrl: './commits.container.html',
    styleUrls: ['./commits.container.scss']
})
export class CommitsContainer implements OnInit {
    commits: Observable<Commit[]>;

    constructor(private commitService: CommitService) {}

    ngOnInit() {
        this.commits = this.commitService.readCommitsByUsername('mmalerba'); 
    }
}
  