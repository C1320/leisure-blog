export namespace Blog{

  export interface IList {
    id: number;
    username: string;
    title: string;
    tags: string;
    url: string;
    create_date: Date;
    update_date: Date;
    user: number;
  }

  export interface IBlogListResponse {
    total: number;
    list: IList[];
  }
}
