import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preview } from 'src/app/shared/model/preview.interface';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'fa-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public previews!: Preview[];
  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data.previews instanceof Array) {
        this.previews = data.previews;
        this.headerService.setBlogTitle();
      } else {
        this.previews = data.previews.previews;
        this.headerService.setTitle('Category: ' + data.previews.category);
      }
    });
    this.headerService.setDefaultPath();
  }
}
