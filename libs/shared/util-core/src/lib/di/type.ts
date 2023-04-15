export type AbstractType<T> = abstract new (...params: unknown[]) => T

export type Type<T = unknown> = new (...params: unknown[]) => T

export interface TypeOf<T> extends Function {
  new (...params: unknown[]): T
}
