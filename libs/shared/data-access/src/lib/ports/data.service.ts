import { Observable } from 'rxjs';

export interface Entity {
  id: unknown;
}

export type CreateType<T extends Entity> = Exclude<T, 'id'> & T;
export type UpdateType<T extends Entity> = Partial<T> & Required<T>;
export type DeleteType<T extends Entity> = Required<T>;

export abstract class DataService<T extends Entity> {
  abstract findAll(): Observable<T[]>;
  abstract findOne<D extends Partial<T>>(value: D): Observable<T>;
  abstract create<D extends CreateType<T>>(value: D): Observable<T>;
  abstract update<D extends UpdateType<T>>(value: D): Observable<T>;
  abstract remove<D extends DeleteType<T>>(value: D): Observable<T>;
}
