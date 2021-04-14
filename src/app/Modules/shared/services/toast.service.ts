import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { toastTypes } from '../constants';
import { Itoast } from '../modal/interfaces/Itoast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastSubject = new Subject<Itoast>();
  showToast(type = toastTypes.DEFAULT, message) {
    this.toastSubject.next({
      type,
      message,
      id: `${Date.now()}${Math.ceil(Math.random() * 100)}`,
    });
  }
}
