import { UserDataService } from '../infrastructure/user-data.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';

export class UserFacade {
  #users = new BehaviorSubject<User[]>([]);
  users$ = this.#users.asObservable();

  constructor(private readonly service: UserDataService) {}

  loadUsers() {
    fetch('http://localhost:3000/api').then((res) => {
      res.json().then((data: User[]) => {
        this.#users.next(data);
      });
    });
  }
}
