export type CreateDto<T> = Exclude<T, 'id'> & T;
