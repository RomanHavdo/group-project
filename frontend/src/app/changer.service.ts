import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangerService {
  public configObservable = new Subject<boolean>();

  emitConfig(val) {
    this.configObservable.next(val);
  }
  constructor() { }
}
