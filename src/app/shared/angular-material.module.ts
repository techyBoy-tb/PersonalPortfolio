import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WavesModule } from 'angular-bootstrap-md';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

const sharedModules = [
    WavesModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule
];
/**
 * Module to include all angular material modules needed for this application
 *
 * @export
 */

@NgModule({
    imports: [sharedModules],
    exports: [sharedModules],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomAngularMaterialModule { }
