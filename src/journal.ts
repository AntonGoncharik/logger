import { Writer } from './writer';

export class Journal {
  error() {
    Writer.write();
  }
}
