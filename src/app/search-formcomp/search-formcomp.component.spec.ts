import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormcompComponent } from './search-formcomp.component';

describe('SearchFormcompComponent', () => {
  let component: SearchFormcompComponent;
  let fixture: ComponentFixture<SearchFormcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
