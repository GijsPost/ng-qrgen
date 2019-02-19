import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgQrgenModule } from 'ng-qrgen';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgQrgenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
