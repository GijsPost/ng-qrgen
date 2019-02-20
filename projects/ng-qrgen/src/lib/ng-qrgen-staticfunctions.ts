import { QrGenOptions, GenerationType } from './ng-qrgen-generation-options.interface';
import * as QRCode from 'qrcode';

export class QrCodeGen {
    static generateEncodedDataUrl(value: string, options: QrGenOptions): Promise<string> {
        if (!options) {
            throw new Error('[NgQrGen] options were not set.');
        }
        if (options.type !== GenerationType.Image) {
            throw new Error('[NgQrGen] options.type should be of value GenerationType.Image when generating an Encoded Data Url.');
        }
        if (!options.imageType) {
            throw new Error('[NgQrGen] options.imageType should be set, when generating an Encoded Data Url.');
        }

        return new Promise<string>((resolve, reject) => {
            // Object must be hard-copied, due to type property override
            const formlessOptions = <any>{ ...options};
            formlessOptions.type = options.imageType;
            delete formlessOptions.imageType;
            QRCode.toDataURL(value, formlessOptions, function (err: Error, url: string) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(url);
                }
            });
        });
    }

    static generateString(value: string, options: QrGenOptions): Promise<string> {
        if (!options) {
            throw new Error('[NgQrGen] options were not set.');
        }

        return new Promise<string>((resolve, reject) => {
            // Object must be hard-copied, due to type property override
            const formlessOptions = <any>{ ...options};
            formlessOptions.type = 'svg';
            QRCode.toString(value, formlessOptions, function (err: Error, url: string) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(url);
                }
            });
        });
    }
}
