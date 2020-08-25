import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leaving-dialog',
    templateUrl: './leaving-dialog.component.html',
    styleUrls: ['./leaving-dialog.component.scss']
})
export class LeavingDialogComponent implements OnInit {

    socialMedia = 'No social media was presented';
    socialURL: string;

    constructor(private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: Object,
        private dialogRef: MatDialogRef<LeavingDialogComponent>,
        private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.socialMedia = this.data['socialTitle'];
        this.socialURL = this.data['socialLink'];
        this.cd.detectChanges();
        console.log('this.socialURL', this.socialURL);
    }

    goToLink() {
        window.location.replace(this.socialURL);
    }

    close() {
        this.dialogRef.close();
    }
}
