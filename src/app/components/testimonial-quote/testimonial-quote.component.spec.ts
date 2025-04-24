import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialQuoteComponent } from './testimonial-quote.component';

describe('TestimonialQuoteComponent', () => {
  let component: TestimonialQuoteComponent;
  let fixture: ComponentFixture<TestimonialQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
