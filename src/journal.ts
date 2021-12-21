import { Writer } from './writer';
import { Options } from './options';
import { JournalOptions, MessageType } from './interfaces';
import { ERROR, WARN, INFO, TRACE, DEBUG, LOG } from './constants';

export class Journal {
  private options: JournalOptions;

  constructor(name: string, options?: JournalOptions) {
    this.options = {
      name: name || Options.getOutput().name,
      root: options?.root ?? Options.getOutput().root,
      dirname: options?.dirname ?? Options.getOutput().dirname,
      file: options?.file ?? Options.getOutput().file,
      console: options?.console ?? Options.getOutput().console,
    };
  }

  private getTemplateMessage(message: string, level: MessageType): string {
    return `[${level}] - [${this.options.name}] - [${new Date().toISOString()}]
    ${message}`;
  }

  error(message: string): void {
    const template = this.getTemplateMessage(message, ERROR);
    Writer.write(template, ERROR, this.options);
  }

  warn(message: string): void {
    const template = this.getTemplateMessage(message, WARN);
    Writer.write(template, WARN, this.options);
  }

  info(message: string): void {
    const template = this.getTemplateMessage(message, INFO);
    Writer.write(template, INFO, this.options);
  }

  trace(message: string): void {
    const template = this.getTemplateMessage(message, TRACE);
    Writer.write(template, TRACE, this.options);
  }

  debug(message: string): void {
    const template = this.getTemplateMessage(message, DEBUG);
    Writer.write(template, DEBUG, this.options);
  }

  log(message: string): void {
    const template = this.getTemplateMessage(message, LOG);
    Writer.write(template, LOG, this.options);
  }
}
