import { AxiosHttp, Http } from '../common/http';
import { Token } from './token';
import { Di } from './di';

describe('sharedUtilCore', () => {
  const API_URL = new Token('api.url');
  Di.add(API_URL, '/api');

  beforeEach(() => {
    Di.add(Http, AxiosHttp, [API_URL]);
  });

  it('should work', () => {
    const http = Di.use(Http);
    expect(http).toBeInstanceOf(AxiosHttp);
  });
});
