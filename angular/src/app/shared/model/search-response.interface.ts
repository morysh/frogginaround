import { Preview } from './preview.interface';

export interface SearchResponse {
  previews: Preview[];
  query: string;
}
