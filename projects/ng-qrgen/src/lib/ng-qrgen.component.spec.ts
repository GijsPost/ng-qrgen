import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQrGenComponent } from './ng-qrgen.component';

describe('NgQrgenComponent', () => {
  let component: NgQrGenComponent;
  let fixture: ComponentFixture<NgQrGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQrGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQrGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
