import { JournalOptions, MessageType } from './interfaces';
import { ERROR, WARN, INFO, TRACE, DEBUG, LOG } from './constants';

export class Writer {
  static write(message: string, level: MessageType, options: JournalOptions) {
    if (options.console) {
      this.writeConsole(message, level);
    }
    if (options.file) {
      this.writeFile(message);
    }
  }

  static writeConsole(message: string, level: MessageType) {
    switch (level) {
      case ERROR:
        console.error(message);
        break;
      case WARN:
        console.warn(message);
        break;
      case INFO:
        console.info(message);
        break;
      case TRACE:
        console.trace(message);
        break;
      case DEBUG:
        console.debug(message);
        break;
      case LOG:
        console.log(message);
        break;
    }
  }

  static writeFile(message: string) {
    console.log('file');
  }
}
