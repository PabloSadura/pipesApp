import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEsAr from '@angular/common/locales/es-AR';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// cambiar el local de la app

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
