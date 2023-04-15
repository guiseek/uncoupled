import { Observable } from 'rxjs';

export abstract class Http<T> {
  constructor(protected readonly baseUrl: string) {}

  protected abstract request<R, D = void>(
    method: string,
    path: string,
    data?: T | D
  ): Observable<R>;

  get<R>(path: string) {
    return this.request<R>('GET', path);
  }

  post<R, D = void>(path: string, data: D) {
    return this.request<R, D>('POST', path, data);
  }

  put<R, D = void>(path: string, data: D) {
    return this.request<R, D>('PUT', path, data);
  }

  delete<R>(path: string) {
    return this.request<R>('DELETE', path);
  }
}
