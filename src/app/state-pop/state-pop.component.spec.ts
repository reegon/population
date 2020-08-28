import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePopComponent } from './state-pop.component';

describe('StatePopComponent', () => {
  let component: StatePopComponent;
  let fixture: ComponentFixture<StatePopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
