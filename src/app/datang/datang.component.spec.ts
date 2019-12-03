import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatangComponent } from './datang.component';

describe('DatangComponent', () => {
  let component: DatangComponent;
  let fixture: ComponentFixture<DatangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
