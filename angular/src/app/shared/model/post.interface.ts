import { BasePost } from './base-post.interface';
import { Category } from './category.interface';
import { Tag } from './tag.interface';

export interface Post extends BasePost {
  content: string;
  featuredMediaUrl: URL;
  categories: Category[];
  tags: Tag[];
}
