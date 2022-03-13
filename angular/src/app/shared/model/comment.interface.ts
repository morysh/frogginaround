export interface Comment {
  id: number;
  date: Date;
  author: string;
  content: string;
  children: Comment[];
}
