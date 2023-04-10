import { Di, Http, Token, RxJSHttp } from '@workspace/shared/util-core';
import {
  UserFacade,
  UserFacadeImpl,
  UserDataService,
  UserDataServiceImpl,
} from '@workspace/shared/data-access';

const API_URL = new Token('api.url');

Di.add(API_URL, 'http://localhost:3000/api');

Di.add(Http, RxJSHttp, [API_URL]);
Di.add(UserDataService, UserDataServiceImpl, [Http]);
Di.add(UserFacade, UserFacadeImpl, [UserDataService]);

setTimeout(() => {
  console.log(Di.use(Http));
  console.log(Di.use(UserDataService));
  console.log(Di.use(UserFacade));
}, 1000);
