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
      if (data.previews) {
        this.previews = data.previews;
        this.headerService.setBlogTitle();
      } else if (data.category) {
        this.previews = data.category.previews;
        this.headerService.setTitle('Category: ' + data.category.category);
      } else if (data.search) {
        this.previews = data.search.previews;
        this.headerService.setTitle('Recherche: ' + data.search.query);
      }
    });
    this.headerService.setDefaultPath();
  }
}
