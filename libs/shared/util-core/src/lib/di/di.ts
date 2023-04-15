import {AbstractType, Type} from './type'
import {Token} from './token'

export class Di {
  static #relations = new Map()
  static #container = new Map()

  static add = <T = unknown>(
    type: AbstractType<T> | Token<T>,
    concrete: T | Type<T> | Token<T>,
    deps: AbstractType<T>[] | Token<T | unknown>[] = []
  ) => {
    this.#relations.set(type, deps.map(this.use))

    if (type instanceof Token) {
      this.#container.set(type, concrete)
      return
    }

    if (typeof concrete === 'function') {
      const clazz = concrete as Type<typeof concrete>
      const instance = new clazz(...this.#relations.get(type))
      if (instance instanceof concrete) {
        this.#container.set(type, instance)
      }
    }
  }

  static use = <T>(type: AbstractType<T> | Token<T>): T => {
    const concrete = this.#container.get(type)

    if (!concrete) {
      throw new Error(`O provider ${type.name} ainda não foi registrado`)
    }

    return concrete
  }

  static providers<F extends 'angular' | 'nest'>(framework: F) {
    return Array.from(this.#container.entries()).map(([provide, useClass]) => {
      const dependencies =
        framework === 'angular'
          ? {deps: this.#relations.get(provide)}
          : {inject: this.#relations.get(provide)}
      return {provide, useClass, ...dependencies}
    })
  }
}
