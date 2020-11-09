import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  isSupported: Boolean;

  constructor(private _location: Location, private router: Router) { }

  ngOnInit(): void {
    this.isSupported = sessionStorage.supportedBrowser;
    console.log(' this.isSupported ', this.isSupported);
  }

  goBack(goingBack: boolean): void {
    goingBack ? this._location.back() : this.router.navigate(['/home']);
  }
}
