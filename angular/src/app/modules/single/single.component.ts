import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/model/category.interface';
import { Comment } from 'src/app/shared/model/comment.interface';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Post } from '../../shared/model/post.interface';

@Component({
  selector: 'fa-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit, AfterViewChecked {
  private readonly WP_IMAGE_SIZE_REGEXP = /(-\d+x\d+)?(\.[a-zA-Z0-9]+)$/;

  get id(): number {
    return this.post.id;
  }

  get content(): any {
    return this.sanitizer.bypassSecurityTrustHtml(this.post.content);
  }

  get publishDate(): Date {
    return this.post.publishDate;
  }

  get categories(): Category[] {
    return this.post.categories;
  }

  get comments(): Comment[] | undefined {
    return this.post.comments;
  }

  private post!: Post;
  private contentAttr?: string;

  modal: boolean = false;
  images: string[] = [];
  galleryIndex: number = 0;

  constructor(private route: ActivatedRoute, private headerService: HeaderService, private ref: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.post = data.post;

      if (this.post.featuredMediaUrl.href) {
        this.headerService.setImagePath(this.post.featuredMediaUrl.href);
      } else {
        this.headerService.setDefaultPath();
      }
      if (this.post.title) {
        this.headerService.setTitle(this.post.title);
      }
    });

    this.contentAttr = '_ngcontent' + [...this.ref.nativeElement.attributes].find((attr) => attr.name.startsWith('_nghost')).name.split('_nghost')[1];
  }

  ngAfterViewChecked(): void {
    (this.ref.nativeElement.querySelectorAll('.content *') as NodeListOf<HTMLElement>).forEach((e) => {
      e.setAttribute(this.contentAttr!, '');
    });

    this.images = [];

    (this.ref.nativeElement.querySelectorAll('.wp-block-image img') as NodeListOf<HTMLImageElement>).forEach((e) => {
      e.classList.add('gallery-img');
      const split: string[] = e.src.split(this.WP_IMAGE_SIZE_REGEXP);
      this.images.push(split[0] + split[2]);
    });
  }

  public openModal(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('gallery-img')) {
      this.galleryIndex = this.images.findIndex(
        (img) => img.split(this.WP_IMAGE_SIZE_REGEXP)[0] === (event.target as HTMLImageElement).src.split(this.WP_IMAGE_SIZE_REGEXP)[0]
      );
      this.modal = true;
      console.log(this.images.length);
    }
  }

  public modalClosed(): void {
    this.modal = false;
  }
}
