import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPaymentPlans } from './school-payment-plans';

describe('SchoolPaymentPlans', () => {
  let component: SchoolPaymentPlans;
  let fixture: ComponentFixture<SchoolPaymentPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolPaymentPlans],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolPaymentPlans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
