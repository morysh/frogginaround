import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const GLOBALS: any;

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private static readonly DEFAULT_IMAGE_PATH: string =
    '/api/wangularp/v1/header';
  private readonly imagePath$ = new BehaviorSubject(
    HeaderService.DEFAULT_IMAGE_PATH
  );
  private readonly title$ = new BehaviorSubject(GLOBALS.title);

  constructor() {}

  public getImagePath$(): BehaviorSubject<string> {
    return this.imagePath$;
  }

  public setImagePath(path: string): void {
    this.imagePath$.next(path);
  }

  public setDefaultPath(): void {
    this.imagePath$.next(HeaderService.DEFAULT_IMAGE_PATH);
  }

  public getTitle$(): BehaviorSubject<string> {
    return this.title$;
  }

  public setTitle(title: string) {
    this.title$.next(title);
  }

  public setBlogTitle() {
    this.title$.next(GLOBALS.title);
  }
}
