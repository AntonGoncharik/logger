import { Journal } from './journal';
import { Options } from './options';

export class Writer {
  static write() {
    this.writeConsole();
  }

  static writeConsole() {
    console.log('object');
  }

  static writeFile() {}
}
