interface Entity {
  id: number;
}

export abstract class MockService<T extends Entity> {
  constructor(protected readonly collection: T[] = []) {}

  create(createDto: Exclude<T, 'id'>) {
    const id = this.collection.length + 1;
    const created = new Date();
    const entity = { ...createDto, created, id };
    this.collection.push(entity);
    return entity;
  }

  findAll() {
    return this.collection;
  }

  findOne(id: number) {
    return this.collection.find((playlist) => playlist.id == id);
  }

  update(id: number, updateDto: Partial<T>) {
    const index = this.#findIndex(id);
    const playlist = { ...this.collection[index], ...updateDto };
    this.collection[index] = playlist;
    return playlist;
  }

  remove(id: number) {
    const index = this.#findIndex(id);
    this.collection.splice(index, 1);
  }

  #findIndex(id: number) {
    return this.collection.findIndex((playlist) => playlist.id === id);
  }
}
