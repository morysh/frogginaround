import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/shared/model/search-response.interface';
import { WordpressService } from '../../shared/services/wordpress.service';

@Injectable({ providedIn: 'root' })
export class WordpressSearchResolver implements Resolve<SearchResponse> {
  constructor(private wpService: WordpressService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SearchResponse> {
    return this.wpService.getSearchPreviews$(route.queryParamMap.get('q')!);
  }
}
