import { User } from "./models/User";

const user = new User({ name: "ismail harmanda", age: 28 });

user.on("change", () => {});
user.on("click", () => {});
user.on("click", () => {});

console.log(user);
