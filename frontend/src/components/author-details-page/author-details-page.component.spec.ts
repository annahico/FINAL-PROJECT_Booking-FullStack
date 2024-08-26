import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorDetailsPageComponent } from './author-details-page.component';

describe('AuthorDetailsPageComponent', () => {
  let component: AuthorDetailsPageComponent;
  let fixture: ComponentFixture<AuthorDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
