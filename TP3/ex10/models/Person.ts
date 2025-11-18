export enum Role {
  User = "User",
  Admin = "Admin"
}

export abstract class Person {
  constructor(
    public id: number,
    public name: string,
    public role: Role
  ) {}

  abstract getPermissions(): string[];
}

export class User extends Person {
  constructor(id: number, name: string) {
    super(id, name, Role.User);
  }

  getPermissions(): string[] {
    return ["borrow", "return"];
  }
}

export class Admin extends Person {
  constructor(id: number, name: string) {
    super(id, name, Role.Admin);
  }

  getPermissions(): string[] {
    return ["borrow", "return", "add", "remove", "manage"];
  }
}