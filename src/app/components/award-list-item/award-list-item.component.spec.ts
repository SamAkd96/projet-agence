import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardListItemComponent } from './award-list-item.component';

describe('AwardListItemComponent', () => {
  let component: AwardListItemComponent;
  let fixture: ComponentFixture<AwardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
