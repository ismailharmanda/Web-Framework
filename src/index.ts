import { User } from "./models/User";

const user = new User({ id: 5, name: "new name", age: 0 });

user.on("save", () => {
  console.log(user);
});

user.save();
