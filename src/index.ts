import { Collection } from "./models/Collection";
import { rootUrl } from "./models/ApiSync";

const collection = new Collection(rootUrl);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
