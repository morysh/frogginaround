import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'fa-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input()
  images: string[] = [];
  @Input()
  index: number = 0;

  constructor() {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  public previous() {
    this.index = (--this.index + this.images.length) % this.images.length;
  }

  public next() {
    this.index = ++this.index % this.images.length;
  }

  public scaled(img: string): string {
    const split = img.split(/(\.[a-zA-Z0-9]+)$/);
    return split[0] + '-scaled' + split[1];
  }
}
