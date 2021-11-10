import { User } from "./models/User";

const user = new User({ name: "ismail harmanda", age: 28 });

user.on("change", () => {
  console.log("Change #1");
});
user.on("click", () => {
  console.log("Click #1");
});
user.on("click", () => {
  console.log("Click #2");
});

user.trigger("change");
user.trigger("click");
user.trigger("noeventwiththisname");
