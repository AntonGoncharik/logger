export type ColorType = 'error' | 'fatal' | 'warn' | 'info' | 'trace' | 'debug';

export interface Output {
  console: boolean;
  file: boolean;
}
