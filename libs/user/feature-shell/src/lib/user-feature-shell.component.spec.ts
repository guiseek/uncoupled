import {ComponentFixture, TestBed} from '@angular/core/testing'
import {UserFeatureShellComponent} from './user-feature-shell.component'

describe('UserFeatureShellComponent', () => {
  let component: UserFeatureShellComponent
  let fixture: ComponentFixture<UserFeatureShellComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeatureShellComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UserFeatureShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
