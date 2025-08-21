import axios, { type AxiosResponse, type AxiosInstance, type AxiosRequestConfig } from "axios";

interface ApiResponse<T> {
  err: number;
  msg: string;
  data: T;
}

type RequestType = {
  <T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

class Request {
  private req: AxiosInstance;

  constructor() {
    this.req = axios.create({
      baseURL: "/api",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
  }

  private async do<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.req<T>(url, config);
    return res.data;
  }

  static create(): RequestType {
    const instance = new Request();
    // bind 保证 this 正确
    const func = instance.do.bind(instance);
    return func;
  }
}

const instance: RequestType = Request.create();

export default instance;