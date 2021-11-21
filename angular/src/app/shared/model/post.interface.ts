import { GenericPost } from './generic-post.interface';

export interface Post extends GenericPost {
  category: string;
  author: string;
  publishDate: string;
}
