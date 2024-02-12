import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;

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
          // Por ejemplo, cambiar la imagen en la parte superior sin desplazamiento vertical
          this.sliderWrapper.nativeElement.scrollLeft = targetSlide.offsetLeft;
        }
      });
    });
  }

}
