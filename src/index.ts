import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { rootUrl } from "./models/ApiSync";

const collection = new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
  User.buildUser(json)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
