export interface IResult<T> {
  data: T | T[];
  page: number;
  per_page: 6;
  support: Support;
  total: number;
  total_pages: 2;
}

export class Support {
  text: string;
  url: String;
}
