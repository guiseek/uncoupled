import {Entity} from './entity'

// export type DeleteDto<T extends Entity | { id?: unknown }> = Entity<
//   T['id']
// > &
//   Partial<T>;
export type DeleteDto<T extends Entity<T['id']>> = T['id']
