import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { LeavingDialogComponent } from './leaving-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


describe('DialogExampleComponent', () => {
  let component: LeavingDialogComponent;
  let fixture: ComponentFixture<LeavingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        CustomAngularMaterialModule ],
      declarations: [ LeavingDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
