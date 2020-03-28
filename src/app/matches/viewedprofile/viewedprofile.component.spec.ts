import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedprofileComponent } from './viewedprofile.component';

describe('ViewedprofileComponent', () => {
  let component: ViewedprofileComponent;
  let fixture: ComponentFixture<ViewedprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
