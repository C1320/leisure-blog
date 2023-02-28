export namespace User {
  export interface ILoginRequest{
    account: string;
    password: string;
  }
  export interface ILoginResponse{
    token: string;
  }
  export interface IRegistryRequest{
    account: string;
    password: string;
    username: string;
    acc_password: string;
  }
  export interface IRegistryResponse{
    token: string;
  }
  export interface IUserInfoResponse {
    id: number;
    username: string;
    account: string;
    phone: string;
    registry_date: Date;
    update_date: Date;
    gender: number;
    email: string;
  }
}
export namespace Blog {
  export interface IBlogUploadRequest{
    title: string;
    url: string | string[];
    tags: string[];
  }
}
