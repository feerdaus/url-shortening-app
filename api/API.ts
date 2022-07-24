import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class API {
  get(url: string, config?: AxiosRequestConfig) {
    return axiosClient.get(url, config);
  }

  post(url: string, options: any, config?: AxiosRequestConfig) {
    return axiosClient.post(url, options, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return axiosClient.delete(url, config);
  }
}

export default new API();
