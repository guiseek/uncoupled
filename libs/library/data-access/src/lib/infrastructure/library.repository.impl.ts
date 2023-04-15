import { LibraryRepository } from '../ports/library.repository';
import { Http } from '@uncoupled/shared/data-access';
import { Playlist } from '../entities/playlist';
import {
  CreateDto,
  DeleteDto,
  FindOneDto,
  UpdateDto,
} from 'libs/shared/data-access/src/lib/types';

export class LibraryRepositoryImpl implements LibraryRepository {
  constructor(private http: Http<Playlist>) {}

  findAll() {
    return this.http.get<Playlist[]>('libraries');
  }

  findOne(value: FindOneDto<Playlist>) {
    return this.http.get<Playlist>(`libraries${value.id}`);
  }

  create(value: CreateDto<Playlist>) {
    return this.http.post<Playlist, CreateDto<Playlist>>('libraries', value);
  }

  update(value: UpdateDto<Playlist>) {
    return this.http.put<Playlist, UpdateDto<Playlist>>(
      `libraries/${value.id}`,
      value
    );
  }

  remove(value: DeleteDto<Playlist>) {
    return this.http.delete<Playlist>(`libraries/${value.id}`);
  }
}
