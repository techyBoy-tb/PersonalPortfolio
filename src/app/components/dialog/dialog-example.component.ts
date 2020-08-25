import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dialog-example',
    templateUrl: './dialog-example.component.html',
    styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

    socialMedia = 'No social media was presented';
    imageSrc: string;

    constructor(private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: Object,
        private dialogRef: MatDialogRef<DialogExampleComponent>,
        private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.socialMedia = this.data['whatSocial'];
        this.imageSrc = this.data['imageSrc'];
        this.cd.detectChanges();
    }

    goToLink() {
        this.dialogRef.close(this.router.navigate(['/error']));
    }

    close() {
        this.dialogRef.close();
    }
}
