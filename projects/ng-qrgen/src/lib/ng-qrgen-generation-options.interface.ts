export interface QrGenOptions {
    version: number;
    type: GenerationType;
    imageType?: ImageType;
    errorCorrectionLevel?: ErrorCorrectionlevel;
    margin?: number;
    scale?: number;
    width: number;
    maskPattern?: number;
    color?: {
        dark?: string,
        light?: string,
    };
}

export enum ErrorCorrectionlevel { Low = 'L', Medium = 'M', Quartive = 'Q', High = 'H' }
export enum GenerationType { Image, Canvas, Svg }
export enum ImageType { Png = 'image/png', Jpeg = 'image/jpeg', Webp = 'image/webp' }
