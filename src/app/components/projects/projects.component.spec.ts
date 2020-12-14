import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../common/layout/footer/footer.component';
import { HeaderComponent } from '../common/layout/header/header.component';
import { ProjectsComponent } from './projects.component';


describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        HeaderComponent,
        FooterComponent,
        CarouselComponent
      ],
      imports: [CustomAngularMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
