import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDataTable } from './advanced-data-table';

describe('AdvancedDataTable', () => {
  let component: AdvancedDataTable;
  let fixture: ComponentFixture<AdvancedDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedDataTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDataTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
