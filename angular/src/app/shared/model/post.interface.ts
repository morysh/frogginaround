import { BasePost } from './base-post.interface';
import { Category } from './category.interface';
import { Comment } from './comment.interface';
import { Link } from './link.interface';
import { Tag } from './tag.interface';

export interface Post extends BasePost {
  content: string;
  featuredMediaUrl: URL;
  categories: Category[];
  tags: Tag[];
  comments?: Comment[];
  prev?: Link;
  next?: Link;
}
