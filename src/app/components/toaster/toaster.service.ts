import { Injectable, inject } from '@angular/core';
import { ToasterComponent } from './toaster.component';

export interface ToastInterface {
  id: number;
  type: 'info' | 'success' | 'error';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: ToastInterface[] = [
    {
      id: 1,
      message: 'This not',
      type: 'info',
    },
    {
      id: 2,
      message: 'This an eror',
      type: 'error',
    },
  ];

  getToasts() {
    return this.toasts;
  }

  addToast(toast: any ) {
    toast.id = (this.toasts[ this.toasts.length - 1].id ?? 0 ) + 1;
    this.toasts.push(toast);
  }

  addSuccess(message: string) {
    this.addToast({ type: 'success', message });
  }

  addError(message: string) {
    this.addToast({ type: 'error', message });
  }

  addInfo(message: string) {
    this.addToast({ type: 'info', message });
  }

  removeToast(id: number) {
    this.toasts.filter( t => t.id !== id);
  }

  clearToasts () {
    this.toasts = [];
  }
}
