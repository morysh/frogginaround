import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../../shared/model/category-response.interface';
import { WordpressService } from '../../shared/services/wordpress.service';

@Injectable({ providedIn: 'root' })
export class WordpressCategoryResolver implements Resolve<CategoryResponse> {
  constructor(private wpService: WordpressService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CategoryResponse> {
    return this.wpService.getCategoryPreviews$(+route.paramMap.get('id')!);
  }
}
