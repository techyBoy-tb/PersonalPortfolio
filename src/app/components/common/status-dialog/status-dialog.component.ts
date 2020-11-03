import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeavingDialogComponent } from '../dialog/leaving-dialog.component';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss']
})
export class StatusDialogComponent implements OnInit {

  status = 'No social media was presented';
  statusUrl: string;
  success: Boolean;
  failure: Boolean;
  email = 'gareth.clifford@live.co.uk';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Object,
    private dialogRef: MatDialogRef<LeavingDialogComponent>,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.success = this.data['status'] === 'Success' ? true : false;
    this.failure = !this.success;
    this.status = this.data['status'] === 'Success' ? this.data['status'] : 'Uh oh';
    this.statusUrl = this.data['statusURL'];
    this.cd.detectChanges();
  }

  close() {
    this.dialogRef.close();
  }
}
