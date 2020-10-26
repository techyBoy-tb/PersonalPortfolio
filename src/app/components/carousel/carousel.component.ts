import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ListCode } from 'src/app/model/list-code.model';

let uniqueId = 0;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() images: Array<ListCode>;
  @Input() title = 'No title provided';
  slideIndex = 1;
  name: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.name = 'custom-carousel' + uniqueId;
    uniqueId++;
    this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides') as any;
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}
