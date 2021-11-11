import axios, { AxiosResponse } from "axios";

const apiUrl = "http://localhost:3000";

export class Sync {
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
