import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Toast, ToastType } from 'src/app/shared/model/toast.interface';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'fa-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() toast!: Toast;
  @HostBinding('class') private type = '';

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.type = ToastType[this.toast.type].toLowerCase();
  }

  @HostListener('click')
  removeToast(): void {
    this.toastService.removeToast(this.toast);
  }
}
