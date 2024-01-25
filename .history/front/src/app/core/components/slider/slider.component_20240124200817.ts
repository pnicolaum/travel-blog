import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChild('sliderSection') sliderSection!: ElementRef;

  currentSlide = 1;
  totalSlides = 3;
  intervalSubscription: any;

  constructor() { }

  ngOnInit(): void {
    this.setupSliderNavigation();
    this.startImageInterval();
  }

  ngOnDestroy(): void {
    this.clearImageInterval();
  }

  setupSliderNavigation(): void {
    const sliderNavLinks = document.querySelectorAll('.slider-nav a');

    sliderNavLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();  // Evitar el comportamiento predeterminado del enlace

        const targetSlideId = link.getAttribute('data-slide');
        const targetSlide = document.getElementById(targetSlideId!);

        // Hacer algo con el elemento de destino (puedes animar el desplazamiento, por ejemplo)
        if (targetSlide) {
          // Desplazar la sección contenedora a la parte superior de la ventana
          this.sliderSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Cambiar la imagen activa
          this.currentSlide = parseInt(targetSlideId!.split('-')[1], 10);
        }
      });
    });
  }

  startImageInterval(): void {
    this.intervalSubscription = interval(5000).subscribe(() => {
      // Cambiar a la siguiente imagen
      this.currentSlide = (this.currentSlide % this.totalSlides) + 1;

      // Desplazar la sección contenedora a la parte superior de la ventana
      this.sliderSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  clearImageInterval(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
