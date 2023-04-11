import { from } from 'rxjs';
import { Http } from '../../ports/http';
import axios from 'axios';

export class AxiosHttp<T> extends Http<T> {
  constructor(override readonly baseUrl: string) {
    super(baseUrl);
  }

  protected request<R>(method: string, path: string, data?: T) {
    const url = `${this.baseUrl}/${path}`;
    const response = axios.request<R>({ method, url, data });
    return from(response.then((res) => res.data));
  }
}
