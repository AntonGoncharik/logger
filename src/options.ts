import { MessageType, JournalOptions } from './interfaces';
import {
  COLOR_ERROR,
  COLOR_WARN,
  COLOR_INFO,
  COLOR_TRACE,
  COLOR_DEBUG,
} from './constants';

export class Options {
  private static output: JournalOptions = {
    name: 'log',
    dirname: 'logs',
    console: true,
    file: false,
  };
  private static colors = {
    ERROR: COLOR_ERROR,
    WARN: COLOR_WARN,
    INFO: COLOR_INFO,
    TRACE: COLOR_TRACE,
    DEBUG: COLOR_DEBUG,
    LOG: COLOR_DEBUG,
  };

  static getColor(colorType: MessageType): string {
    return this.colors[colorType];
  }

  static getOutput(): JournalOptions {
    return this.output;
  }
}
