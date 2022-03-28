import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastType } from '../model/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private static readonly DELAY = 3000;

  private toasts: Toast[] = [
    //
    // { type: ToastType.SUCCESS, message: 'Lorem ipsum dolor sit amet' }, //
  ];
  private _toasts$: BehaviorSubject<Toast[]> = new BehaviorSubject(this.toasts);

  public get toast$() {
    return this._toasts$;
  }

  constructor() {}

  public addToast(type: ToastType, message: string) {
    const toast: Toast = {
      type: type,
      message: message,
    };

    this.toasts.push(toast);
    this._toasts$.next(this.toasts);

    setTimeout(() => {
      this.removeToast(toast);
    }, ToastService.DELAY);
  }

  public removeToast(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
    this._toasts$.next(this.toasts);
  }
}
