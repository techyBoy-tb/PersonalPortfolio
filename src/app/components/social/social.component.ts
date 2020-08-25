import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog/dialog-example.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      whatSocial: 'LinkedIn',
      imagesrc: '../../../assets/linkedin.svg'
    };

    this.dialog.open(DialogExampleComponent, dialogConfig);
}

  ngOnInit(): void {
  }

  takeMeHere(where: string): void {
  }

}
