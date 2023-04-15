import {Entity, FindOptions} from '../../types'
import {Repository} from '../../ports'
import {of} from 'rxjs'

export abstract class MockRepository<T extends Entity<T['id']>>
  implements Repository<T>
{
  constructor(protected readonly collection: T[] = []) {}

  findAll() {
    return of(this.collection)
  }

  findOne(value: FindOptions<T>) {
    const entity = this.collection.find((item) => {
      Object.entries(value).every(([key, val]) => item[key as keyof T] === val)
    })

    if (!entity) {
      throw new Error(`${value} não encontrado`)
    }

    return of(entity)
  }

  find(value: FindOptions<T>) {
    const items = this.collection.filter((item) => {
      Object.entries(value).every(([key, val]) => item[key as keyof T] === val)
    })

    return of(items)
  }

  findById(id: number) {
    const entity = this.collection.find((item) => {
      return item.id === id
    })

    if (!entity) {
      throw new Error(`${id} não encontrado`)
    }

    return of(entity)
  }

  create(value: Omit<T, 'id'>) {
    const id = this.collection.length + 1
    const entity = {...value, id} as T
    this.collection.push(entity)
    return of(entity)
  }

  update(id: number, value: Partial<T>) {
    const index = this.#findIndex(id)
    const playlist = {...this.collection[index], ...value}
    this.collection[index] = playlist
    return of(playlist)
  }

  remove(id: number) {
    const index = this.#findIndex(id)
    const entity = this.collection[index]
    this.collection.splice(index, 1)
    return of(entity)
  }

  #findIndex(id: number) {
    return this.collection.findIndex((playlist) => playlist.id === id)
  }
}
