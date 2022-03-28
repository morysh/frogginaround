import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'fa-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  get toasts$() {
    return this.toastService.toast$;
  }

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}
}
