Fast and easy QR code generator (Angular v2+).

# NgQrGen
An Angular (v2+) Component wrapper for: https://www.npmjs.com/package/qrcode
Create QR Codes easily and dynamic.

![Image](src/assets/demoImage.png "icon")

## Installation

`npm i ng-qrgen`  

Add NgQrgenModule to your angular module.

## Usage
`<ng-qrgen [value]="'StringValue'" [options]="options"></ng-qrgen>`

## Options
The options interface can be found at  
`import { QrGenOptions } from 'ng-qrgen';`  
Which looks like:  
```
{
    version: number;
    type: GenerationType;
    imageType?: ImageType;
    errorCorrectionLevel?: ErrorCorrectionlevel;
    margin?: number;
    scale?: number;
    width: number;
    maskPattern?: number;
    color?: {
        dark: string,
        light: string,
    };
}
```
* `version`: The QR code version (1-40), higher means more black squares.  
* `type`: Image, Canvas, or Svg. 
* `imageType`: If you chose Image at `type`, determine which image type to use: Png, Jpeg, or Webp.  
* `errorCorrectionLevel`: The level of error correction: Low, Medium, Quartive, High. (See: https://www.npmjs.com/package/qrcode#error-correction-level).  
* `margin`: White space around the edges.  
* `scale`: Scale factor. A value of 1 means 1px per modules (black dots).  
* `width`: Size of the QR code.  
* `maskPattern`: Mask pattern used to mask the symbol.  
* `color`: The dark and light colors. Use Hex-codes.  

## Static Methods  
`import { NgQrGen } from 'ngqrgen';`  
Usage:  
* `NgQrGen.generateEncodedDataUrl(value: string, options: QrGenOptions)`: Generates an base-64 encoded data url string as QR code source. Can be used in the `src` property of an image.  
* `NgQrGen.generateString(value: string, options: QrGenOptions)`: Generates an svg element as string.  