import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();
  private _idUserEventEmitter: EventEmitter<number> = new EventEmitter();
  private _selectedUserEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor() {}

  get newUserEventEmitter() {
    return this._newUserEventEmitter;
  }

  get idUserEventEmitter() {
    return this._idUserEventEmitter;
  }

  get selectedUserEventEmitter() {
    return this._selectedUserEventEmitter;
  }
}
