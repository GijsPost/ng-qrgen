import { QrGenOptions, GenerationType } from './ng-qrgen-generation-options.interface';
import * as QRCode from 'qrcode';

export class QrCodeGen {
    static generateEncodedDataUrl(options: QrGenOptions): Promise<string> {
        if (!options) {
            throw new Error('Options were not set.');
        }
        if (options.type !== GenerationType.Image) {
            throw new Error('options.type should be of value GenerationType.Image when generating an Encoded Data Url.');
        }
        if (!options.imageType) {
            throw new Error('options.imageType should be set, when generating an Encoded Data Url.');
        }

        return new Promise<string>((resolve, reject) => {
            const formlessOptions = <any>options;
            formlessOptions.type = options.imageType;
            delete formlessOptions.imageType;
            QRCode.toDataURL(formlessOptions.value, formlessOptions, function (err: Error, url: string) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(url);
                }
            });
        });
    }

    static generateString(options: QrGenOptions): Promise<string> {
        if (!options) {
            throw new Error('Options were not set.');
        }

        return new Promise<string>((resolve, reject) => {
            const formlessOptions = <any>options;
            formlessOptions.type = 'svg';
            QRCode.toString(formlessOptions.value, formlessOptions, function (err: Error, url: string) {
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
