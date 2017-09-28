import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalageComponent } from './calage.component';

describe('CalageComponent', () => {
  let component: CalageComponent;
  let fixture: ComponentFixture<CalageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
