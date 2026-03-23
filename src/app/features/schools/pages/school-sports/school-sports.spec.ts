import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSports } from './school-sports';

describe('SchoolSports', () => {
  let component: SchoolSports;
  let fixture: ComponentFixture<SchoolSports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolSports],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolSports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
