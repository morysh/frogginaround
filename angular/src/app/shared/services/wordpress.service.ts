import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Preview } from '../model/preview.interface';
import { map, tap } from 'rxjs/operators';
import { Category } from '../model/category.interface';
import { Tag } from '../model/tag.interface';
import { Post } from '../model/post.interface';
import { BasePost } from '../model/base-post.interface';
import { CategoryResponse } from '../model/category-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  constructor(private http: HttpClient) {}

  public getPreviews$(): Observable<Preview[]> {
    return this.http.get<Preview[]>('/api/wangularp/v1/previews').pipe(
      tap((previews: Preview[]) => {
        previews.forEach((preview: Preview) => {
          this.transformBasePost(preview);
        });
      })
    );
  }

  public getCategoryPreviews$(category: number): Observable<CategoryResponse> {
    return this.http
      .get<CategoryResponse>(`/api/wangularp/v1/previews/category/${category}`)
      .pipe(
        tap((response: CategoryResponse) => {
          response.previews.forEach((preview: Preview) => {
            this.transformBasePost(preview);
          });
        })
      );
  }

  public getPost$(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/wangularp/v1/${id}`).pipe(
      tap((post: Post) => {
        this.transformBasePost(post);
        post.categories.forEach((category: Category) => {
          category.link = new URL(category.link);
          category.link.host = window.location.host;
        });
        post.tags.forEach((tag: Tag) => {
          tag.link = new URL(tag.link);
          tag.link.host = window.location.host;
        });
        post.featuredMediaUrl = new URL(post.featuredMediaUrl);
      })
    );
  }

  private transformBasePost(post: BasePost): void {
    post.link = new URL(post.link);
    post.publishDate = new Date(post.publishDate);
  }
}
