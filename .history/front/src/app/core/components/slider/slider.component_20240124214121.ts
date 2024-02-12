import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  list = document.querySelector('.slider .list');
  items = document.querySelectorAll('.slider .list .item');
  dots = document.querySelectorAll('.slider .dots .li');
  prev = document.getElementById('prev');
  next = document.getElementById('next');

  active = 0;


}
