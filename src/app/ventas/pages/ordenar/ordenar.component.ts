import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayuscula = false;

  ordenarPor: string = '';

  heroes: Heroes[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  cambiarMayusculas() {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor: string): void {
    this.ordenarPor = valor;
  }
}
