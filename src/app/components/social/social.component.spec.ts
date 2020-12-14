import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { SocialComponent } from './social.component';


describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomAngularMaterialModule],
      declarations: [SocialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
