import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipListItemComponent } from './chip-list-item.component';

describe('ChipListItemComponent', () => {
  let component: ChipListItemComponent;
  let fixture: ComponentFixture<ChipListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
