import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Preview } from '../model/preview.interface';
import { map, tap } from 'rxjs/operators';
import { Category } from '../model/category.interface';
import { Tag } from '../model/tag.interface';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  constructor(private http: HttpClient) {}

  public getPreviews(): Observable<Preview[]> {
    return this.http
      .get<Preview[]>(`${environment.domain}/api/wangularp/v1/previews`)
      .pipe(
        tap((previews: Preview[]) => {
          previews.forEach((preview: Preview) => {
            preview.link = new URL(preview.link);
            preview.link.host = window.location.host;
            preview.publishDate = new Date(preview.publishDate);
            preview.categories.forEach((category: Category) => {
              category.url = new URL(category.url);
              category.url.host = window.location.host;
            });
            preview.tags.forEach((tag: Tag) => {
              tag.url = new URL(tag.url);
              tag.url.host = window.location.host;
            });
          });
        })
      );
  }
}
