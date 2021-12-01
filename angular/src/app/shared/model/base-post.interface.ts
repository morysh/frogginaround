import { Category } from './category.interface';
import { Tag } from './tag.interface';

export interface BasePost {
  title: string;
  categories: Category[];
  tags: Tag[];
  link: URL;
  publishDate: Date;
}
