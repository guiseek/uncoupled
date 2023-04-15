import {Observable} from 'rxjs'

export abstract class Store<T> {
  abstract select<K>(mapFn: (state: T) => K): Observable<K>

  abstract setState(newState: Partial<T>): void
}
