import { MessageType, JournalOptions } from './interfaces';
import {
  COLOR_ERROR,
  COLOR_WARN,
  COLOR_INFO,
  COLOR_TRACE,
  COLOR_DEBUG,
} from './constants';

export class Options {
  /**
   * Default options for Journal
   */
  private static output: JournalOptions = {
    name: 'log',
    dirname: 'logs',
    console: true,
    file: false,
  };

  /**
   * Colors for message in console
   */
  private static colors = {
    ERROR: COLOR_ERROR,
    WARN: COLOR_WARN,
    INFO: COLOR_INFO,
    TRACE: COLOR_TRACE,
    DEBUG: COLOR_DEBUG,
    LOG: COLOR_DEBUG,
  };

  /**
   *
   * @param colorType {MessageType} - message type example ERROR, INFO etc...
   * @returns color
   */
  static getColor(colorType: MessageType): string {
    return this.colors[colorType];
  }

  /**
   *
   * @returns output object for Journal
   */
  static getOutput(): JournalOptions {
    return this.output;
  }
}
