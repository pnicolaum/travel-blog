import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  openModal() {
    // Abre el modal usando JavaScript/jQuery o Angular (dependiendo de tu preferencia)
    $('.modal').modal('show'); // Requiere jQuery y Bootstrap
  }

  closeModal() {
    // Cierra el modal usando JavaScript/jQuery o Angular (dependiendo de tu preferencia)
    $('.modal').modal('hide'); // Requiere jQuery y Bootstrap
  }
}
