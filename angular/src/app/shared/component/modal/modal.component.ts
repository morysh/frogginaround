import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'fa-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  @ViewChild(ModalComponent)
  private modal!: ModalComponent;

  constructor(private ref: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  hostClick(event: MouseEvent): void {
    if (event.target == this.ref.nativeElement) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
