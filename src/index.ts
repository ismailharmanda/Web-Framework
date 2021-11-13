import { User } from "./models/User";

const user = new User({ name: "İsmail Harmanda", age: 29 });

console.log(user.get("name"));
