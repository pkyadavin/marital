import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewednotcontactedComponent } from './viewednotcontacted.component';

describe('ViewednotcontactedComponent', () => {
  let component: ViewednotcontactedComponent;
  let fixture: ComponentFixture<ViewednotcontactedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewednotcontactedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewednotcontactedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
