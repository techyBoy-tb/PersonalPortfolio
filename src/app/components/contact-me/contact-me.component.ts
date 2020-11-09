import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api/api.service';
import { FormService } from 'src/app/service/form/form.service';
import { StatusDialogComponent } from '../common/status-dialog/status-dialog.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit, AfterViewInit {

  public loading = false;
  public process: string;
  public processes = {
    submit: 'submitting'
  };
  public statusList = [
    { name: 'Success', url: '../../../assets/icons8-double-tick-48.png' },
    { name: 'Failure', url: '../../../assets/icons8-speak-no-evil-monkey-48.png' },
  ];
  public contactDetails: FormGroup = this.formService.getContactDetails();
  public message = {};

  constructor(public apiService: ApiService, public dialog: MatDialog, private formService: FormService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.contactDetails.markAsUntouched();
  }

  submit() {
    if (!this.contactDetails.valid) { this.contactDetails.markAllAsTouched(); return; }
    this.loading = true;
    this.process = this.processes.submit;
    this.apiService.submitEmail(this.createObject()).subscribe(() => {
      this.loading = false;
      this.openDialog('Success');
    }, this.handleError);
  }

  openDialog(status: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      status: status,
      statusURL: this.statusList.find(element => element.name === status).url,
    };

    this.dialog.open(StatusDialogComponent, dialogConfig);
  }

  createObject(): Object {
    const messageBody = {
      from: this.contactDetails.controls['emailAddress'].value,
      name: this.contactDetails.get('name').value,
      subject: this.contactDetails.get('subject').value,
      text: this.contactDetails.get('emailBody').value
    };
    return messageBody;
  }

  handleError = (error?: any) => {
    this.loading = false;
    if (error instanceof HttpErrorResponse) {
      console.log('Error: ', error);
      this.openDialog('Failure');
    }
  }
}
