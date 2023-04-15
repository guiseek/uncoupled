import {FindOperator} from './find-operator'

export type FindOptions<T> = {
  [P in keyof T]?: {
    [op in FindOperator]?: T[P]
  }
}
