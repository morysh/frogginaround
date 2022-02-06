import { Category } from './category.interface';
import { Tag } from './tag.interface';

export interface BasePost {
  title: string;
  link: URL;
  publishDate: Date;
}
