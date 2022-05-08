import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    credentials?: string;
  }
}
