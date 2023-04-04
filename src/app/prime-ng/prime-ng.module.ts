import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [],
  exports: [MenubarModule, CardModule, FieldsetModule, ButtonModule],
})
export class PrimeNgModule {}
