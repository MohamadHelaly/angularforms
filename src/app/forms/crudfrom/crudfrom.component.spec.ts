import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDfromComponent } from './crudfrom.component';

describe('CRUDfromComponent', () => {
  let component: CRUDfromComponent;
  let fixture: ComponentFixture<CRUDfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
