import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Preview } from '../model/preview.interface';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  constructor(private http: HttpClient) {}

  public getPreviews(): Observable<Preview[]> {
    return this.http.get<Preview[]>(
      `${environment.domain}/api/wangularp/v1/previews`
    );
  }
}
