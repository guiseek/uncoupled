import {Entity} from './entity'

// export type UpdateDto<T extends Entity | { id?: unknown }> = Partial<T> &
//   Required<Entity<T['id']>>;
export type UpdateDto<T extends Entity<T['id']>> = [T['id'], Partial<T>]
