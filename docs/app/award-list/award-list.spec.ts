import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardList } from './award-list';

describe('AwardList', () => {
  let component: AwardList;
  let fixture: ComponentFixture<AwardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
