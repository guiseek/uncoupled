import { Observable } from 'rxjs';

export interface Entity {
  id: unknown;
}

export type CreateType<T> = Exclude<T, 'id'> & T;
export type UpdateType<T> = Entity & Partial<T>;
export type DeleteType<T> = Entity & Partial<T>;

export abstract class DataService<T extends Entity> {
  abstract findAll(): Observable<T[]>;
  abstract findOne<D extends Partial<T>>(value: D): Observable<T>;
  abstract create<D extends CreateType<T>>(value: D): Observable<T>;
  abstract update<D extends UpdateType<T>>(value: D): Observable<T>;
  abstract remove<D extends DeleteType<T>>(value: D): Observable<T>;
}
