import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayuscula = false;

  cambiarMayusculas() {
    this.enMayuscula = !this.enMayuscula;
  }
}
