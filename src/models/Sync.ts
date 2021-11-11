import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

const apiUrl = "http://localhost:3000";
const rootUrl = apiUrl + "/users";

export class Sync {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
