import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MenubarModule,
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
