import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operator/switchMap';

import { Commit } from '../domain/commit';

@Injectable()
export class CommitService {

    constructor(private http: HttpClient) {}

    readCommitsByUsername(username: string): Observable<Commit[]> {
        const url = `https://api.github.com/users/${username}/events`;
        return this.http.get(url)
            .pipe(
                map((response: any[]) => response
                    .filter(isPushEvent) // [PushEvent, PushEvent, PushEvent]
                    .reduce((commits, pushEvent) => // [[Commit, Commit], [Commit, Commit, Commit]] => [Commit, Commit, Commit, Commit, Commit]
                        commits.concat(pushEvent.payload.commits.map(commit => 
                            new Commit(commit.sha, 
                                pushEvent.repo.name, 
                                commit.author.name, 
                                commit.message))
                            )    
                    , [])
                )); 
    }

    readCommitsByRepo(repository: string): Observable<Commit[]> {
        return null;
    }
}

const isPushEvent = (entry) => entry.type === 'PushEvent';


// next action item: flatmap this fucking shit 