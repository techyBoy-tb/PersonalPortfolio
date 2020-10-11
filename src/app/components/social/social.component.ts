import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SOCIAL_MEDIA_LIST } from 'src/app/model/enum/consts.enum';
import { LeavingDialogComponent } from '../common/dialog/leaving-dialog.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  private socialList = SOCIAL_MEDIA_LIST;

  constructor(public dialog: MatDialog) {}

  openDialog(social: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      socialTitle: social,
      socialLink: this.socialList.find(element => element.name === social).url,
    };

    this.dialog.open(LeavingDialogComponent, dialogConfig);
  }

}
