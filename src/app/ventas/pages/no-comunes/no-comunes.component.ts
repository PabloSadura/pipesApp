import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Pablo';
  genero: string = 'masculino';
  obj = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Pablo', 'Emi', 'Mateo', 'Facundo'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando ',
    '=1': 'tenemos un cliente esperando ',
    '=2': 'tenemos 2 clientes esperando ',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente(): void {
    if (this.genero === 'masculino') {
      this.nombre = 'Emilia';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Pablo';
      this.genero = 'masculino';
    }
  }
  borrarCliente(): void {
    this.clientes.pop();
  }

  // keyValue Pipe

  persona = {
    nombre: 'Pablo',
    edad: 37,
    direccion: 'Santa Fe, Argentina',
  };
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false },
  ];

  // Async Pipe

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
