import * as crypto from 'crypto-js';

export class Util {
  static hash(str: string) {
    var digest = crypto.SHA256(str);
    return digest.toString();
  }
}
