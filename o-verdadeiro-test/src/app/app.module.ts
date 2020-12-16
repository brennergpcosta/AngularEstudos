import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SegurosComponent } from './seguros/seguros.component';
import { SeguroComponent } from './seguros/seguro/seguro.component';
import { CalculoComponent } from './calculo/calculo.component';
import { ChangePageService } from './services/change-page.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SegurosComponent,
    SeguroComponent,
    CalculoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChangePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
