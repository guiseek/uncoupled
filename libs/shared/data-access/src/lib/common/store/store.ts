import {BehaviorSubject, Observable, distinctUntilChanged, map} from 'rxjs'

export abstract class Store<T> {
  #state: BehaviorSubject<T>

  protected get state(): T {
    return this.#state.getValue()
  }

  constructor(initialState: T) {
    this.#state = new BehaviorSubject<T>(initialState)
  }

  protected setState(newState: Partial<T>): void {
    this.#state.next({
      ...this.state,
      ...newState,
    })
  }

  select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.#state.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    )
  }
}
