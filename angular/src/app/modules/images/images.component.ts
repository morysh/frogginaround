import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/shared/model/image.interface';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'fa-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images!: Image[];
  modal: boolean = false;
  galleryIndex: number = 0;

  get fullImages() {
    return this.images.map((img) => img.full.toString());
  }

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.images = data.images;
    });
    this.headerService.setTitle('Gallerie');
  }
  public openModal(index: number): void {
    this.galleryIndex = index;
    this.modal = true;
  }

  public modalClosed(): void {
    this.modal = false;
  }
}
