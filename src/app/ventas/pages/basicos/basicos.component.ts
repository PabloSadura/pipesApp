import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'Pablo';
  nombreUpper: string = 'PABLO';
  nombreCompleto: string = 'pAblo SaDura';

  fecha: Date = new Date();
}
