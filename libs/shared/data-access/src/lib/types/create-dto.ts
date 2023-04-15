import {Entity} from './entity'

// export type CreateDto<T> = Exclude<T, 'id'> & T;
export type CreateDto<T extends Entity<T['id']>> = Omit<T, 'id'>
