import { Http, RxJSHttp } from '@workspace/shared/data-access';
import { Di, Token } from '@workspace/shared/util-core';
import {
  UserFacade,
  UserFacadeImpl,
  UserDataService,
  UserDataServiceImpl,
} from '@workspace/user/data-access';
import {
  LibraryFacade,
  LibraryFacadeImpl,
  LibraryDataService,
  LibraryDataServiceImpl,
} from '@workspace/library/data-access';

const API_URL = new Token('api.url');

Di.add(API_URL, 'http://localhost:3000/api');

Di.add(Http, RxJSHttp, [API_URL]);
Di.add(UserDataService, UserDataServiceImpl, [Http]);
Di.add(UserFacade, UserFacadeImpl, [UserDataService]);

Di.add(LibraryDataService, LibraryDataServiceImpl, [Http]);
Di.add(LibraryFacade, LibraryFacadeImpl, [LibraryDataService]);

setTimeout(() => {
  console.log(Di.use(Http));
  console.log(Di.use(UserDataService));
  console.log(Di.use(UserFacade));
  console.log(Di.use(LibraryDataService));
  console.log(Di.use(LibraryFacade));
}, 1000);
