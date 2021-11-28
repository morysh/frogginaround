import { BasePost } from './base-post.interface';

export interface Preview extends BasePost {
  excerpt: string;
  thumbnail: string;
}
