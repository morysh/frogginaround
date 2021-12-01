import { BasePost } from './base-post.interface';

export interface Post extends BasePost {
  content: string;
  featuredMediaTag: HTMLElement;
}