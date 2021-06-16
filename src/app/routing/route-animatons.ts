import {
  animate, query, style, transition, trigger
} from '@angular/animations';

// Basic
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateX(100%)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('1000ms ease', style({ opacity: 1, transform: 'scale(1) translateX(0)' })),
      ], { optional: true }),
    ]),
]);
