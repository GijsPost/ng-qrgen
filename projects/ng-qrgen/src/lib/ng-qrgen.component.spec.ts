import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQrgenComponent } from './ng-qrgen.component';

describe('NgQrgenComponent', () => {
  let component: NgQrgenComponent;
  let fixture: ComponentFixture<NgQrgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQrgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQrgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
