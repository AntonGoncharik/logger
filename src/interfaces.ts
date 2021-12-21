export type MessageType = 'ERROR' | 'WARN' | 'INFO' | 'TRACE' | 'DEBUG' | 'LOG';

export interface JournalOptions {
  name: string;
  root: string;
  dirname: string;
  file: boolean;
  console: boolean;
}
