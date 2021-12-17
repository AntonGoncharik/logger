import { Journal } from './journal';
import { Options } from './options';

export class Logger {
  private static instance: Logger;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
  }

  journal() {
    return Journal;
  }
}
