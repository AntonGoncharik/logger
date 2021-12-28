import { mkdirSync } from 'fs';

import { Writer } from './writer';
import { Options } from './options';
import { JournalOptions, MessageType } from './interfaces';
import { ERROR, WARN, INFO, TRACE, DEBUG, LOG } from './constants';

export class Journal {
  private options: JournalOptions;

  /**
   * @constructor
   * @param name {string} - name of the journal and file name log
   * @param options {JournalOptions} - journal options
   * @param options.name {string} - name of the journal and file name log
   * @param options.dirname {string} - dirname for file log
   * @param options.file {boolean} - flag to write to file
   * @param options.console {boolean} - flag to write to console
   */
  constructor(name: string, options?: JournalOptions) {
    this.options = {
      name: name || Options.getOutput().name,
      dirname: options?.dirname ?? Options.getOutput().dirname,
      file: options?.file ?? Options.getOutput().file,
      console: options?.console ?? Options.getOutput().console,
    };

    if (this.options.file && this.options.dirname) {
      mkdirSync(this.options.dirname, { recursive: true });
    }
  }

  /**
   *
   * @param message {string} - your message
   * @param level {MessageType} - message type example ERROR, INFO etc...
   * @return
   */
  private getTemplateMessage(message: string, level: MessageType): string {
    return `[${level}] - [${
      this.options.name
    }] - [${new Date().toISOString()}]\n<<${message}>>\n`;
  }

  /**
   *
   * @param message {string} - your message
   */
  error(message: string): void {
    const template = this.getTemplateMessage(message, ERROR);
    Writer.write(template, ERROR, this.options);
  }

  /**
   *
   * @param message {string} - your message
   */
  warn(message: string): void {
    const template = this.getTemplateMessage(message, WARN);
    Writer.write(template, WARN, this.options);
  }

  /**
   *
   * @param message {string} - your message
   */
  info(message: string): void {
    const template = this.getTemplateMessage(message, INFO);
    Writer.write(template, INFO, this.options);
  }

  /**
   *
   * @param message {string} - your message
   */
  trace(message: string): void {
    const template = this.getTemplateMessage(message, TRACE);
    Writer.write(template, TRACE, this.options);
  }

  /**
   *
   * @param message {string} - your message
   */
  debug(message: string): void {
    const template = this.getTemplateMessage(message, DEBUG);
    Writer.write(template, DEBUG, this.options);
  }

  /**
   *
   * @param message {string} - your message
   */
  log(message: string): void {
    const template = this.getTemplateMessage(message, LOG);
    Writer.write(template, LOG, this.options);
  }
}
