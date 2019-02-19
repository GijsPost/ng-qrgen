import { Component } from '@angular/core';
import { QrGenOptions, GenerationType, ErrorCorrectionlevel, ImageType } from 'projects/ng-qrgen/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options: QrGenOptions = {
    value: 'Gijs',
    version: 7,
    margin: 0,
    width: 500,
    type: GenerationType.Image,
    imageType: ImageType.Png,
  };
}
