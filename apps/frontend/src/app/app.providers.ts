import {AxiosHttpImpl, Http, RxJSHttpImpl} from '@uncoupled/shared/data-access'
import {Di, Token} from '@uncoupled/shared/util-core'
import {
  UserFacade,
  UserFacadeImpl,
  UserRepository,
  UserRepositoryImpl,
} from '@uncoupled/user/data-access'
import {
  LibraryFacade,
  LibraryFacadeImpl,
  LibraryRepository,
  LibraryRepositoryImpl,
  Playlist,
} from '@uncoupled/library/data-access'

const API_URL = new Token('api.url')

Di.add(API_URL, 'http://localhost:3000/api')
const LIBRARY_MOCK = new Token<Playlist[]>('library.mock')
Di.add(LIBRARY_MOCK, [
  {
    id: 1,
    title: 'Jazz / Soul / Blues / Funk',
    cover: '/assets/library-cover-jazz.jpg',
    kind: 'Playlist',
    owner: 'Gui Seek',
    created: new Date(),
    lastPlay: new Date(),
    playing: false,
  },
])

Di.add(Http, AxiosHttpImpl, [API_URL])
Di.add(UserRepository, UserRepositoryImpl, [Http]);
Di.add(UserFacade, UserFacadeImpl, [UserRepository])

Di.add(LibraryRepository, LibraryRepositoryImpl, [Http]);
Di.add(LibraryFacade, LibraryFacadeImpl, [LibraryRepository])

setTimeout(() => {
  console.log(Di.use(Http))
  console.log(Di.use(UserRepository))
  console.log(Di.use(UserFacade))
  console.log(Di.use(LibraryRepository))
  console.log(Di.use(LibraryFacade))
}, 1000)
