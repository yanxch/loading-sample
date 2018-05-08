import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CenteredComponent } from './layout/centered/centered.component';
import { CommitService } from './commits/services/commit.service';
import { HttpClientModule } from '@angular/common/http';
import { CommitsContainer } from './commits/container/commits.container';
import { CommitListComponent } from './commits/components/commitList.component';
import { CommitActions } from './commits/domain/commit.actions';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommitState, reducer as commitReducer } from './commits/domain/commit.reducer';
import { CommitEffects } from './commits/domain/commit.effects';
import { CommitSelectors } from './commits/domain/commit.selectors';

// TODO(christian): move in own state file
export interface AppState {
  commits: CommitState;
}

export const reducers: ActionReducerMap<AppState> = {
  commits: commitReducer
};

export const effects: any[] = [CommitEffects];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  declarations: [
    AppComponent,
    CenteredComponent,
    CommitsContainer,
    CommitListComponent
  ],
  providers: [
    CommitService,
    CommitActions,
    CommitSelectors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
