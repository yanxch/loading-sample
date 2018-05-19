import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommitsContainer } from './commits/container/commits.container';
import { CenteredComponent } from './layout/centered/centered.component';
import { CommitListComponent } from './commits/components/commitList.component';
import { MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { CommitActions } from './commits/domain/commit.actions';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatListModule,
        MatIconModule
      ],
      declarations: [
        AppComponent,
        CommitsContainer,
        CenteredComponent,
        CommitListComponent
      ],
      providers: [
        CommitActions
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
