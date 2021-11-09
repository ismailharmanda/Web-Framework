import { User } from "./models/User";

const user = new User({ name: "ismail harmanda", age: 28 });

user.set({ age: 29 });

console.log(user.get("name"));
console.log(user.get("age"));
