import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Image } from 'src/app/shared/model/image.interface';
import { WordpressService } from '../../shared/services/wordpress.service';

@Injectable({ providedIn: 'root' })
export class WordpressImagesResolver implements Resolve<Image[]> {
  constructor(private wpService: WordpressService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Image[]> {
    return this.wpService.getImages$();
  }
}
