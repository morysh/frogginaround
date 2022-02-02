import { Component, Input, OnInit } from '@angular/core';
import { Preview } from 'src/app/shared/model/preview.interface';

@Component({
  selector: 'fa-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() preview!: Preview;

  constructor() {}

  ngOnInit(): void {}
}
