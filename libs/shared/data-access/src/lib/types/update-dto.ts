import { EntityBase } from './entity-base';

export type UpdateDto<T extends EntityBase | { id?: unknown }> = Partial<T> &
  Required<EntityBase<T['id']>>;
