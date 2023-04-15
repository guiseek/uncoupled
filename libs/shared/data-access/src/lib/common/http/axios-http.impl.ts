import {from} from 'rxjs'
import {Http} from '../../ports/http'
import axios from 'axios'

export class AxiosHttpImpl<T> extends Http<T> {
  protected request<R, D = void>(method: string, path: string, data?: T | D) {
    const url = `${this.baseUrl}/${path}`
    const response = axios.request<R>({method, url, data})
    return from(response.then((res) => res.data))
  }
}
