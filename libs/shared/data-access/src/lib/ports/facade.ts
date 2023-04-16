import {Observable, OperatorFunction} from 'rxjs'

export abstract class Facade<T> {
  abstract loading$: Observable<boolean>
  abstract error$: Observable<string[]>
  abstract data$: Observable<T[]>

  abstract load(): void
  abstract catch<R>(): OperatorFunction<R, R>
  // abstract save<D>(valuue: D | T): void
  // abstract remove<D>(value: D | T): void
}
