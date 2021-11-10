import { User } from "./models/User";

const user = new User({ name: "İsmail Harmanda", age: 29 });
user.events.on("click", () => {
  console.log("Clicked");
});
user.events.trigger("click");
