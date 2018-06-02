import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Commit } from './commit';
import { createType, createActionCreator, createBoundActionCreator } from '../../state';


@Injectable()
export class CommitActions {
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              TYPE DEFINITIONS                */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
   static LOAD_COMMITS =           createType('[Commits List] Load Commits');
   static LOAD_COMMITS_SUCCESS =   createType('[Commits List API] Load Commits Succeeded');
   static LOAD_COMMITS_FAILURE =   createType('[Commits List API] Load Commits Failed');
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              ACTION CREATORS                 */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
   static LoadCommits = createActionCreator<Pick<User, 'username'>>(CommitActions.LOAD_COMMITS);
   static LoadCommitsSuccess = createActionCreator<Commit[]>(CommitActions.LOAD_COMMITS_SUCCESS);
   static LoadCommitsFailure = createActionCreator<{}>(CommitActions.LOAD_COMMITS_FAILURE);

   constructor(private store: Store<any>) {}

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              BOUND ACTIONS                   */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
   loadCommits = createBoundActionCreator(CommitActions.LoadCommits, this.store.dispatch.bind(this.store));
}
