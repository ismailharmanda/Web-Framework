interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps);
}
