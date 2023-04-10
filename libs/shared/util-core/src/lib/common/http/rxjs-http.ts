import { map } from 'rxjs';
import { Http } from './http';
import { ajax } from 'rxjs/ajax';

export class RxJSHttp<T> extends Http<T> {
  constructor(override readonly baseUrl: string) {
    super(baseUrl);
  }

  protected request<R>(method: string, path: string, body?: T) {
    const url = `${this.baseUrl}/${path}`;
    const req = ajax<R>({ url, method, body });
    return req.pipe(map((res) => res.response));
  }
}
