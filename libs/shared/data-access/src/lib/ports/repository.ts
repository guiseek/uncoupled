import {Entity, FindOptions} from '../types'
import {Observable} from 'rxjs'

export abstract class Repository<T extends Entity<T['id']>> {
  abstract findAll(): Observable<T[]>
  abstract findOne(value: FindOptions<T>): Observable<T>
  abstract find(value: FindOptions<T>): Observable<T[]>
  abstract findById(id: T['id']): Observable<T>
  abstract create<D>(value: D | Omit<T, 'id'>): Observable<T>
  abstract update(id: T['id'], value: Partial<T>): Observable<T>
  abstract remove(id: T['id']): Observable<T>
}
