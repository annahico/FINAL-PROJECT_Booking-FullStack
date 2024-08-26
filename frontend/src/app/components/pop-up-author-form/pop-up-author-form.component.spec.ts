import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpAuthorFormComponent } from './pop-up-author-form.component';

describe('PopUpAuthorFormComponent', () => {
  let component: PopUpAuthorFormComponent;
  let fixture: ComponentFixture<PopUpAuthorFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAuthorFormComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PopUpAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
