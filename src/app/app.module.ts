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


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    CenteredComponent,
    CommitsContainer,
    CommitListComponent
  ],
  providers: [
    CommitService,
    CommitActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
