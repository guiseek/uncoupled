import { Observable } from 'rxjs';

export abstract class Http<T> {
  constructor(protected readonly baseUrl: string) {}

  protected abstract request<R>(
    method: string,
    path: string,
    data?: T
  ): Observable<R>;

  get<R>(path: string) {
    return this.request<R>('GET', path);
  }

  post<R>(path: string, data: T) {
    return this.request<R>('POST', path, data);
  }

  put<R>(path: string, data: T) {
    return this.request<R>('PUT', path, data);
  }

  delete<R>(path: string) {
    return this.request<R>('DELETE', path);
  }
}
