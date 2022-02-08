import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Preview } from '../../shared/model/preview.interface';
import { WordpressService } from '../../shared/services/wordpress.service';

@Injectable({ providedIn: 'root' })
export class WordpressPreviewsResolver implements Resolve<Preview[]> {
  constructor(private wpService: WordpressService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Preview[]> {
    return this.wpService.getPreviews$();
  }
}
