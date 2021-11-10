import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

const apiUrl = "http://localhost:3000";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${apiUrl}/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        response.status === 200 && this.set(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      // put
      axios.put(`${apiUrl}/users/${id}`, this.data);
    } else {
      axios.post(`${apiUrl}/users`, this.data);
    }
  }
}
