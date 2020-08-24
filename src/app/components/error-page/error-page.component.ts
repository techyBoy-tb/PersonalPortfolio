import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private _location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  goBack(goingBack: boolean): void {
    goingBack ? this._location.back() : this.router.navigate(['/home']);
  }

}
