import { RouterTestingModule } from '@angular/router/testing';
import { UiLayoutModule } from '@uncoupled/shared/ui-layout';
import { MockDataService } from '@uncoupled/shared/util-test';
import { Di } from '@uncoupled/shared/util-core';
import { TestBed } from '@angular/core/testing';
import {
  User,
  UserFacade,
  UserFacadeImpl,
} from '@uncoupled/user/data-access';
import {
  Playlist,
  LibraryFacade,
  LibraryFacadeImpl,
} from '@uncoupled/library/data-access';
import { AppComponent } from './app.component';

class UserDataService extends MockDataService<User> {
  constructor() {
    super([{ id: 1, name: 'Gui' }]);
  }
}
class LibraryDataService extends MockDataService<Playlist> {
  constructor() {
    super([
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
    ]);
  }
}

Di.add(UserDataService, UserDataService);
Di.add(UserFacade, UserFacadeImpl, [UserDataService]);
Di.add(LibraryDataService, LibraryDataService);
Di.add(LibraryFacade, LibraryFacadeImpl, [LibraryDataService]);

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiLayoutModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it(`should have UserFacade instance'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.userFacade).toBeInstanceOf(UserFacadeImpl);
  });

  it(`should have LibraryFacade instance'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.libraryFacade).toBeInstanceOf(LibraryFacadeImpl);
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it(`should have a playlist item`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    jest.spyOn(app, 'ngOnInit');

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const playlists = compiled.querySelectorAll('ui-library-list-item');

    expect(playlists.length).toEqual(1);
  });
});
