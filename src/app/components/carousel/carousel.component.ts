import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ListCode } from 'src/app/model/list-code.model';

let uniqueId = 0;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() images: Array<ListCode>;
  @ViewChild('myImages', { static: false }) myImages: ElementRef;
  @ViewChild('dots', { static: false }) dots: ElementRef;
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
    const slides = this.myImages.nativeElement.children;
    const dots = this.dots.nativeElement.children;
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
