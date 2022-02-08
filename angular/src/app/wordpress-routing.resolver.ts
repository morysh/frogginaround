import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UrlData } from './shared/model/url-data.interface';
import { UrlType } from './shared/model/url-type.enum';

@Injectable({ providedIn: 'root' })
export class WordpressRoutingResolver
  implements Resolve<HttpErrorResponse | null>
{
  constructor(private http: HttpClient, private router: Router) {}

  private error: HttpErrorResponse | null = null;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): HttpErrorResponse | null {
    // routing parameter ignored but differentiates the request to avoid polluting the state history and messing with the navigation
    this.http.get<UrlData>(state.url + '?routing=true').subscribe(
      (urlData: UrlData): void => {
        switch (urlData.type) {
          case UrlType.CATEGORY:
            this.router.navigate(['/previews', 'category', urlData.id], {
              skipLocationChange: true,
            });
            return;
          case UrlType.POSTS:
            this.router.navigate(['/previews'], { skipLocationChange: true });
            return;
          case UrlType.POST:
            this.router.navigate(['/single', urlData.id], {
              skipLocationChange: true,
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
