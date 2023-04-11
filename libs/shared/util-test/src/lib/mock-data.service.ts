import {
  CreateType,
  DataService,
  UpdateType,
  DeleteType,
} from '@workspace/shared/data-access';
import { of } from 'rxjs';

interface Entity {
  id: number;
}

export abstract class MockDataService<T extends Entity>
  implements DataService<T>
{
  constructor(protected readonly collection: T[] = []) {}

  findAll() {
    return of(this.collection);
  }

  findOne<D extends Partial<T>>(value: D) {
    const entity = this.collection.find((playlist) => {
      Object.entries(value).every(
        ([key, value]) => playlist[key as keyof T] === value
      );
    });

    if (!entity) {
      throw new Error(`${value.id} não encontrado`);
    }

    return of(entity);
  }

  create<D extends CreateType<T>>(value: D) {
    const id = this.collection.length + 1;
    const created = new Date();
    const entity = { ...value, created, id };
    this.collection.push(entity);
    return of(entity);
  }

  update<D extends UpdateType<T>>(value: D) {
    const index = this.#findIndex(value.id);
    const playlist = { ...this.collection[index], ...value };
    this.collection[index] = playlist;
    return of(playlist);
  }

  remove<D extends DeleteType<T>>(value: D) {
    const index = this.#findIndex(value.id);
    const entity = this.collection[index];
    this.collection.splice(index, 1);
    return of(entity);
  }

  #findIndex(id: number) {
    return this.collection.findIndex((playlist) => playlist.id === id);
  }
}