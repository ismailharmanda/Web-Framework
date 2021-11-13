import { User } from "./models/User";

const user = User.buildUser({ id: 6, name: "Osman", age: 40 });

user.on("change", () => {
  console.log(user);
});
user.on("save", () => {
  console.log("Successfully saved to database", user);
});

user.fetch();
user.save();
