export interface Toast {
  type: ToastType;
  message: string;
}

export enum ToastType {
  SUCCESS,
  ERROR,
  INFO,
}
