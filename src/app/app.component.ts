import { Component } from '@angular/core';
import { QrGenOptions, GenerationType, ImageType } from 'projects/ng-qrgen/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stringValue = 'Test';
  public readonly options: QrGenOptions = {
    version: 5,
    margin: 0,
    width: 150,
    type: GenerationType.Canvas,
    imageType: ImageType.Png,
    color: {
      light: '#00FFFFFF',
    }
  };

  constructor() {
    setInterval(_ => {
      this.stringValue = Math.random().toString();
    }, 1000);
  }
}
