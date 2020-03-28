import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchidComponent } from './searchid.component';

describe('SearchidComponent', () => {
  let component: SearchidComponent;
  let fixture: ComponentFixture<SearchidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
