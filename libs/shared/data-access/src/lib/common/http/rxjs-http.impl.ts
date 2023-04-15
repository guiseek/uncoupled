import {map} from 'rxjs'
import {Http} from '../../ports/http'
import {ajax} from 'rxjs/ajax'

export class RxJSHttpImpl<T> extends Http<T> {
  constructor(override readonly baseUrl: string) {
    super(baseUrl)
  }

  protected request<R, D = void>(method: string, path: string, body?: T | D) {
    const url = `${this.baseUrl}/${path}`
    const req = ajax<R>({url, method, body})
    return req.pipe(map((res) => res.response))
  }
}
