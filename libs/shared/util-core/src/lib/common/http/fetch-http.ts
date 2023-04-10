import { from } from 'rxjs';
import { Http } from './http';

export class FetchHttp<T> extends Http<T> {
  constructor(override readonly baseUrl: string) {
    super(baseUrl);
  }

  protected request<R>(method: string, path: string, data?: T) {
    const url = `${this.baseUrl}/${path}`;
    const body = data ? JSON.stringify(data) : undefined;
    const req = fetch(url, { method, body });
    return from<Promise<R>>(req.then((res) => res.json()));
  }
}
