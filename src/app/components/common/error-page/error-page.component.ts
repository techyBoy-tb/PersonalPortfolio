import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  constructor(private _location: Location, private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollFunction, true);
  }

  goBack(goingBack: boolean): void {
    goingBack ? this._location.back() : this.router.navigate(['/home']);
  }
  // window.onscroll = function() {scrollFunction()};

  scrollFunction(): void {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('header').style.fontSize = '30px';
    } else {
      document.getElementById('header').style.fontSize = '90px';
    }
  }
}
