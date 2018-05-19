import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CommitsContainer } from "./commits.container";

describe('Commits Page', () => {
    let fixture: ComponentFixture<CommitsContainer>;
    let instance: CommitsContainer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CommitsContainer
            ]
        });

        fixture = TestBed.createComponent(CommitsContainer);
        instance = fixture.componentInstance;
    });

    it('should compile', () => {
        fixture.detectChanges();
    
        expect(instance.commits).toBeDefined();
      });

});