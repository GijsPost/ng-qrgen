import { Component, OnChanges, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import * as QRCode from 'qrcode';
import { QrGenOptions, GenerationType } from './ng-qrgen-generation-options.interface';
import { NgQrGen } from './ng-qrgen-staticfunctions';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ng-qrgen',
  template: `
    <div [innerHtml]="innerHtml" #qrcElement></div>
  `,
  styles: []
})
/**
 * <h2>NgQrGenComponent</h2>
 *
 * can be implemented like so:
 * <ng-qrgen [options]="options"></ng-qrgen>
 */
export class NgQrGenComponent implements OnChanges {

  @Input('value') value: string;
  @Input('options') options: QrGenOptions;

  @ViewChild('qrcElement') qrElement: ElementRef;

  public innerHtml: SafeHtml;

  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    if (!this.value) {
      throw new Error('[NgQrGen] value is null, implement: value="string value"');
    }
    if (!this.options) {
      throw new Error('[NgQrGen] options were null, implement: [options]="options" where options: QrGenOptions ');
    }

    this.generateQR(this.options);
  }

  private generateQR(options: QrGenOptions): void {
    if (options.type === GenerationType.Image) {
      this.renderImage(options);
    }
    if (options.type === GenerationType.Canvas) {
      this.renderCanvas(options);
    }
    if (options.type === GenerationType.Svg) {
      this.renderSvg(options);
    }
  }

  private renderCanvas(options: QrGenOptions): void {
    const element: Element = this.renderer.createElement('canvas');
    new Promise((resolve, reject) => {
      QRCode.toCanvas(element, this.value, options, function (error: Error) {
        if (error) {
          reject(error);
          throw error;
        } else {
          resolve('success');
        }
      });
    }).then(_ => {
      this.renderElement(element);
    });
  }

  private renderImage(options: QrGenOptions): void {
    NgQrGen.generateEncodedDataUrl(this.value, options).then((url: string) => {
      const element: Element = this.renderer.createElement('img');
      element.setAttribute('src', url);
      this.renderElement(element);
    });
  }

  private renderSvg(options: QrGenOptions): void {
    NgQrGen.generateString(this.value, options).then((generatedString: string) => {
      this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(generatedString);
    });
  }

  private renderElement(element: Element): void {
    for (const node of this.qrElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrElement.nativeElement, node);
    }
    this.renderer.appendChild(this.qrElement.nativeElement, element);
  }
}
