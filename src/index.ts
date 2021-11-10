import { User } from "./models/User";

const user = new User({ id: 4, name: "Sevinç Harmanda", age: 50 });

user.save();

setTimeout(() => {
  console.log(user);
}, 1000);
