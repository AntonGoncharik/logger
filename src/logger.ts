import { Journal } from './journal';

export class Logger {
  private static instance: Logger;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  journal() {
    return Journal;
  }
}
