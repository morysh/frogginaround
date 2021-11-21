import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/shared/services/wordpress.service';

@Component({
  selector: 'fa-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private wpService: WordpressService) {}

  ngOnInit(): void {}
}
