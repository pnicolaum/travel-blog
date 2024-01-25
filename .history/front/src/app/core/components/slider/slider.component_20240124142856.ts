import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

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
          // Por ejemplo, desplazarse suavemente a la posición del elemento objetivo
          targetSlide.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }


}
