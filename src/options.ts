import { ColorType, Output } from './interfaces';

export class Options {
  private static instance: Options;
  private output: Output = {
    console: true,
    file: false,
  };
  private colors: {
    error: '\x1b[31m%s\x1b[0m';
    fatal: '\x1b[35m%s\x1b[0m';
    warn: '\x1b[33m%s\x1b[0m';
    info: '\x1b[36m%s\x1b[0m';
    trace: '\x1b[37m%s\x1b[0m';
    debug: '\x1b[32m%s\x1b[0m';
  };

  constructor() {
    if (Options.instance) {
      return Options.instance;
    }
  }

  getColor(colorType: ColorType): string {
    return this.colors[colorType];
  }

  getOutput(): Output {
    return this.output;
  }

  setOutput(output: Output): void {
    this.output = output;
  }
}
