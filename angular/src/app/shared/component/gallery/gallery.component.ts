import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'fa-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  private _images: string[] = [];

  @Input()
  set images(images: string[]) {
    this._images = images.map((i) => {
      const split: string[] = i.split(this.WP_IMAGE_REGEXP);
      return split[0] + split[2];
    });
  }

  get images() {
    return this._images;
  }

  _index = 0;

  @Input()
  get index(): number {
    return this._index;
  }

  set index(index: number | string) {
    if (typeof index === 'number') {
      this._index = index;
    } else {
      const i = this.images.findIndex(
        (img) =>
          img.split(this.WP_IMAGE_REGEXP)[0] ===
          index.split(this.WP_IMAGE_REGEXP)[0]
      );

      if (i > -1) {
        this._index = i;
      }
    }
  }

  private readonly WP_IMAGE_REGEXP = /(-\d+x\d+)?(\.\w+)/;

  constructor() {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  public previous() {
    this._index = (--this._index + this.images.length) % this.images.length;
  }

  public next() {
    this._index = ++this._index % this.images.length;
  }

  public addImage(image: string): void {
    const split: string[] = image.split(this.WP_IMAGE_REGEXP);
    this.images.push(split[0] + split[3]);
  }
}
