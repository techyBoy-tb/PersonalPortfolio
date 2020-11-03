import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api/api.service';
import { StatusDialogComponent } from '../common/status-dialog/status-dialog.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  public loading = false;
  public process: string;
  public processes = {
    submit: 'submitting'
  };
  public statusList = [
    { name: 'Success', url: '../../../assets/icons8-double-tick-48.png' },
    { name: 'Failure', url: '../../../assets/icons8-speak-no-evil-monkey-48.png' },
  ];


  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submit() {
    console.log('Submit has been called');
    // this.loading = true;
    // this.process = this.processes.submit;

    // this.apiService.submitEmail(this.createObject()).subscribe(() => {
    // this.loading = false;
    this.openDialog('Failure');
    // }, this.handleError);
  }

  submitPass() {
    this.openDialog('Success');
  }
  submitFail() {
    this.openDialog('Failure');
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
      from: 'tomking9219@gmail.com',
      name: 'Tom King',
      subject: 'Testing for you',
      text: 'Hi, I just wanted to ask something in a long sentance, or even maybe a paragraph. I want to know how this will look on the automation email that will be sent out.'
    };
    return messageBody;
  }

  handleError = (error?: any) => {
    if (error instanceof HttpErrorResponse) {
      console.log('Apparent error:', error);
      window.alert('oops something went wrong');
    }
  }
}
