import { User } from "./models/User";

const user = new User({ name: "ismail harmanda", age: 29 });

console.log(user.get("name"));
console.log(user.get("age"));
