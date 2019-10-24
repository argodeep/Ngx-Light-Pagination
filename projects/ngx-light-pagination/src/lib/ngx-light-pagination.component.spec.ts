import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLightPaginationComponent } from './ngx-light-pagination.component';

describe('NgxLightPaginationComponent', () => {
  let component: NgxLightPaginationComponent;
  let fixture: ComponentFixture<NgxLightPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLightPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLightPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
