import {
  CreateDto,
  DeleteDto,
  EntityBase,
  FindOneDto,
  UpdateDto,
} from '../types';
import { Observable } from 'rxjs';

export abstract class Repository<T extends EntityBase<T['id']>> {
  abstract findAll(): Observable<T[]>;
  abstract findOne<D extends FindOneDto<T>>(value: D): Observable<T>;
  abstract create<D extends CreateDto<T>>(value: D): Observable<T>;
  abstract update<D extends UpdateDto<T>>(value: D): Observable<T>;
  abstract remove<D extends DeleteDto<T>>(value: D): Observable<T>;
}
