import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPartComponent } from './stats-part.component';

describe('StatsPartComponent', () => {
  let component: StatsPartComponent;
  let fixture: ComponentFixture<StatsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
