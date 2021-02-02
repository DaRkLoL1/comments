export interface IComment {
  id: number;
  parent_id: number;
  datetime: string;
  author_name: string;
  body: string;
  comments?: IComment[];
}
