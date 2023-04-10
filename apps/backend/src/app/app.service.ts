import { Injectable } from "@nestjs/common";
import { User } from "@workspace/shared/data-access";

@Injectable()
export class AppService {

  #users: User[] = [
    { id: 0, name: 'Gui' }
  ]

  getData(): { message: string } {
    return { message: "Hello API" };
  }

  getUsers() {
    return this.#users
  }
}
