import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preview } from '../model/preview.interface';
import { tap } from 'rxjs/operators';
import { Category } from '../model/category.interface';
import { Tag } from '../model/tag.interface';
import { Post } from '../model/post.interface';
import { BasePost } from '../model/base-post.interface';
import { CategoryResponse } from '../model/category-response.interface';
import { Image } from '../model/image.interface';
import { SearchResponse } from '../model/search-response.interface';
import { Comment } from '../model/comment.interface';

type WpComment = {
  id: number;
  date: string;
  author: string;
  content: string;
  parent?: number;
};

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

  public getSearchPreviews$(query: string): Observable<SearchResponse> {
    return this.http
      .get<SearchResponse>(`/api/wangularp/v1/search?q=${query || ''}`)
      .pipe(
        tap((response: SearchResponse) => {
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
        post.featuredMediaUrl &&= new URL(post.featuredMediaUrl);
        if (post.comments) {
          const comments: Comment[] = [];
          const commentRegistry: Map<number, Comment> = new Map();

          (post.comments as unknown as WpComment[]).forEach(
            (wpComment: WpComment) => {
              const comment: Comment = {
                id: wpComment.id,
                author: wpComment.author,
                date: new Date(wpComment.date),
                content: wpComment.content,
                children: [],
              };
              if (wpComment.parent) {
                commentRegistry.get(wpComment.parent)!.children.push(comment);
              } else {
                comments.push(comment);
                commentRegistry.set(comment.id, comment);
              }
            }
          );

          post.comments = comments;
        }
      })
    );
  }

  public getImages$(): Observable<Image[]> {
    return this.http
      .get<Image[]>('/api/wangularp/v1/images') //
      .pipe(
        tap((response: Image[]) => {
          response.forEach((image: Image) => {
            image.thumbnail &&= new URL(image.thumbnail);
            image.full &&= new URL(image.full);
          });
        })
      );
  }

  private transformBasePost(post: BasePost): void {
    post.link &&= new URL(post.link);
    post.publishDate &&= new Date(post.publishDate);
  }
}
