import { Journal } from './journal';

export class Logger {
  private static instance: Logger;

  /**
   * @constructor
   * @returns logger
   */
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  /**
   *
   * @returns journal
   */
  journal() {
    return Journal;
  }
}
