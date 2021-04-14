import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  entrySubject = new Subject<string>();

  constructor() {}

  getEntry(): Subject<string> {
    return this.entrySubject;
  }

  setEntry(entry: string) {
    this.entrySubject.next(entry);
    return true
  }
}
