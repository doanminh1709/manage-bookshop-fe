import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }
  showSlides(): void {
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 0; }
    for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    (slides[this.slideIndex] as HTMLElement).style.display = "block";
    dots[this.slideIndex].className += " active";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
    }
}
