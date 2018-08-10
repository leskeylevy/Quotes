import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteByComponent } from './quote-by.component';

describe('QuoteByComponent', () => {
  let component: QuoteByComponent;
  let fixture: ComponentFixture<QuoteByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
