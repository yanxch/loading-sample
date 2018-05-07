import { Component, Input } from '@angular/core';
import { Commit } from '../domain/commit';

@Component({
  selector: 'commit-list',
  templateUrl: './commitList.component.html',
  styleUrls: ['./commitList.component.scss']
})
export class CommitListComponent {
   @Input()
   commits: Commit[];
}
