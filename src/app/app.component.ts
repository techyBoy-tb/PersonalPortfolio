import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './routing/route-animatons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ fader ]
})
export class AppComponent {
  title = 'techyBoy';

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
