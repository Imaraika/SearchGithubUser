import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoCompComponent } from './user-info-comp.component';

describe('UserInfoCompComponent', () => {
  let component: UserInfoCompComponent;
  let fixture: ComponentFixture<UserInfoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
