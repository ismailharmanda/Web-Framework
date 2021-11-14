import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { rootUrl } from "./models/ApiSync";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
