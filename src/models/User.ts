import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync, rootUrl } from "./ApiSync";
import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}

const user = User.buildUser({});
user.get("id");
user.get("name");
user.get("age");
