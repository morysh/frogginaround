import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environment';
import { UrlData } from './shared/model/url-data.interface';
import { UrlType } from './shared/model/url-type.enum';

@Injectable({ providedIn: 'root' })
export class WordpressResolver implements Resolve<HttpErrorResponse | null> {
  constructor(private http: HttpClient, private router: Router) {}

  private error: HttpErrorResponse | null = null;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): HttpErrorResponse | null {
    this.http.get<UrlData>(environment.domain + state.url).subscribe(
      (urlData: UrlData): void => {
        switch (urlData.type) {
          case UrlType.POSTS:
            this.router.navigate(['/posts'], { skipLocationChange: true });
            return;
          case UrlType.POST:
            this.router.navigate(['/single', urlData.id], {
              skipLocationChange: false,
            });
            return;
          case UrlType.PAGE:
            this.router.navigate(['/page', urlData.id], {
              skipLocationChange: true,
            });
            return;
          default:
            return;
        }
      },
      (error: HttpErrorResponse): void => {
        this.error = error;

        this.router.navigate(['/error'], {
          skipLocationChange: true,
        });
      }
    );

    return this.error;
  }
}
