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
    root: 'logs',
    dirname: '',
    console: true,
    file: false,
  };
  private static colors: {
    ERROR: typeof COLOR_ERROR;
    WARN: typeof COLOR_WARN;
    INFO: typeof COLOR_INFO;
    TRACE: typeof COLOR_TRACE;
    DEBUG: typeof COLOR_DEBUG;
    LOG: typeof COLOR_DEBUG;
  };

  static getColor(colorType: MessageType): string {
    return this.colors[colorType];
  }

  static getOutput(): JournalOptions {
    return this.output;
  }

  static setOutput(output: JournalOptions): void {
    this.output = output;
  }
}
