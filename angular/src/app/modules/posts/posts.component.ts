import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Preview } from 'src/app/shared/model/preview.interface';
import { WordpressService } from 'src/app/shared/services/wordpress.service';

@Component({
  selector: 'fa-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public previews$?: Observable<Preview[]>;
  constructor(private wpService: WordpressService) {}

  ngOnInit(): void {
    this.previews$ = this.wpService.getPreviews();
  }
}
