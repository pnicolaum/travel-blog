import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // list = document.querySelector('.slider .list');
  // items = document.querySelectorAll('.slider .list .item');
  // dots = document.querySelectorAll('.slider .dots .li');
  // prev = document.getElementById('prev');
  // next = document.getElementById('next');

  // active = 0;
  // lengthItems = items.length - 1;

  // next.onclick = function () {
  //   if (active + 1 > lengthItems){
  //     active = 0;
  //   } else{
  //     active = active+1;
  //   }
  //   reloadSlider();
  // }

  // reloadSlider() {
  //   checkLeft = items[active].offsetLeft;
  //   list.style.left = -checkLeft + 'px';

  //   lastActiveDot = document.querySelector('.slider .dots li.active');
  //   lastActiveDot.classList.remove('active');
  //   dots[active].classList.add('active');

  // }

}
