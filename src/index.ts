import { User } from "./models/User";

const user = new User({ name: "İsmail Harmanda", age: 29 });

user.on("change", () => {
  console.log("onchange function triggered");
});

user.trigger("change");
