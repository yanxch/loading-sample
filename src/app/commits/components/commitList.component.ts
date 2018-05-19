import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Commit } from '../domain/commit';

@Component({
  selector: 'commit-list',
  templateUrl: './commitList.component.html',
  styleUrls: ['./commitList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitListComponent {
   @Input()
   commits: Commit[];
}
