import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigRequestComponent } from './gig-request.component';

describe('GigRequestComponent', () => {
  let component: GigRequestComponent;
  let fixture: ComponentFixture<GigRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
