import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @ViewChild('sliderSection') sliderSection!: ElementRef;

  currentSlide = 1;
  totalSlides = 3;

  constructor() { }

  ngOnInit(): void {
    this.setupSliderNavigation();
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
          // Desplazar la sección contenedora a la parte superior de la ventana de forma suave
          targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Cambiar la imagen activa
          this.currentSlide = parseInt(targetSlideId!.split('-')[1], 10);
        }
      });
    });
  }

}
