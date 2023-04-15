import { EntityBase } from './entity-base';

export type DeleteDto<T extends EntityBase | { id?: unknown }> = EntityBase<
  T['id']
> &
  Partial<T>;
