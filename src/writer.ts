import { appendFile } from 'fs/promises';

import { JournalOptions, MessageType } from './interfaces';
import { ERROR, WARN, INFO, TRACE, DEBUG, LOG } from './constants';
import { Options } from './options';

export class Writer {
  static write(
    message: string,
    level: MessageType,
    options: JournalOptions,
  ): void {
    if (options.console) {
      this.writeConsole(message, level);
    }
    if (options.file) {
      this.writeFile(message, options);
    }
  }

  static writeConsole(message: string, level: MessageType): void {
    const color = Options.getColor(level);

    switch (level) {
      case ERROR:
        console.error(color, message);
        break;
      case WARN:
        console.warn(color, message);
        break;
      case INFO:
        console.info(color, message);
        break;
      case TRACE:
        console.trace(color, message);
        break;
      case DEBUG:
        console.debug(color, message);
        break;
      case LOG:
        console.log(color, message);
        break;
    }
  }

  static async writeFile(
    message: string,
    options: JournalOptions,
  ): Promise<void> {
    try {
      await appendFile(`${options.dirname}/${options.name}.log`, message);
    } catch (error) {
      throw error;
    }
  }
}
