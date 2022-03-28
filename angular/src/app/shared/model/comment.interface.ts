export interface Comment {
  id: number;
  date: Date;
  author: string;
  avatar: string;
  content: string;
  children: Comment[];
  postId: number;
}
