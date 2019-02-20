import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgQrGenModule } from '../../projects/ng-qrgen/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgQrGenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
