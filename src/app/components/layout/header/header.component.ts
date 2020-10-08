import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.scrollFunction, true);
  }

  // ngOnDestroy(): void {
  //   window.removeEventListener('scroll', this.scrollFunction, true);
  // }

  // scrollFunction(): void {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById('background-img').style.display = '30px';
  //   } else {
  //     document.getElementById('background-img').style.display = 'block';
  //   }
  // }
  public onToggleSidenav = () => {
    this.sideNavToggle.emit();
  }

  toggleScroll(id: string): void {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
