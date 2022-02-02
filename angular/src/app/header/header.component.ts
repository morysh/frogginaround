import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderService } from '../shared/services/header.service';

@Component({
  selector: 'fa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public imagePath: BehaviorSubject<string>;

  constructor(private headerService: HeaderService) {
    this.imagePath = headerService.getImagePath$();
  }

  ngOnInit(): void {}
}
