import { Observable } from 'rxjs';

export abstract class Facade<T> {
  abstract error$: Observable<string[]>;
  abstract data$: Observable<T[]>;

  abstract load(): void;
  abstract save<D>(valuue: D | T): void;
  abstract remove<D>(value: D | T): void;
}
