import { Http } from '../../ports/http';
import { from } from 'rxjs';

export class FetchHttpImpl<T> extends Http<T> {
  constructor(override readonly baseUrl: string) {
    super(baseUrl);
  }

  protected request<R, D = void>(method: string, path: string, data?: T | D) {
    const url = `${this.baseUrl}/${path}`;
    const headers = { 'Content-Type': 'application/json' };
    const body = data ? JSON.stringify(data) : undefined;

    const req = fetch(url, { method, headers, body }).then(async (res) => {
      if (res.status >= 400) {
        throw await res.json();
      }
      return res.text().then((text) => (text ? JSON.parse(text) : {}));
    });

    return from<Promise<R>>(req);
  }
}
