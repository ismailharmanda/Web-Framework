import axios, { AxiosResponse } from "axios";

const apiUrl = "http://localhost:3000";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]; //Yukarıda kullandığım gibi de çalışır.
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
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
}
