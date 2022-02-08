import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../shared/model/post.interface';
import { WordpressService } from '../../shared/services/wordpress.service';

@Injectable({ providedIn: 'root' })
export class WordpressPostResolver implements Resolve<Post> {
  constructor(private wpService: WordpressService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    return this.wpService.getPost$(route.paramMap.get('id')!);
  }
}
