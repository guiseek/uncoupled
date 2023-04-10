import { UserDataService, UserFacade } from '@workspace/shared/data-access';
import { AxiosHttp, RxJSHttp, FetchHttp, Di, Http, Token } from '@workspace/shared/util-core';

const API_URL = new Token('api.url');

Di.add(API_URL, '/api');

Di.add(Http, RxJSHttp, [API_URL]);
Di.add(UserDataService, UserDataService, [Http]);
Di.add(UserFacade, UserFacade, [UserDataService]);

console.log(Di.use(UserFacade));
