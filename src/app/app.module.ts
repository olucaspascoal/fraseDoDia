import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { FraseService } from './services/frase.service';
import { FraseComponent } from './frase/frase.component';

@NgModule({
  declarations: [
    AppComponent,
    FraseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
