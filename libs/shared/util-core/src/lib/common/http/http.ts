import { Observable } from 'rxjs';

export abstract class Http<T> {
  constructor(protected readonly baseUrl: string) {}

  protected abstract request<R>(
    method: string,
    path: string,
    data?: T
  ): Observable<R>;

  async get<R>(path: string) {
    return this.request<R>('GET', path);
  }

  async post<R>(path: string, data: T) {
    return this.request<R>('POST', path, data);
  }

  async put<R>(path: string, data: T) {
    return this.request<R>('PUT', path, data);
  }

  async delete<R>(path: string) {
    return this.request<R>('DELETE', path);
  }
}
