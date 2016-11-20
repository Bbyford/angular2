/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiderNavComponent } from './sider-nav.component';

describe('SiderNavComponent', () => {
  let component: SiderNavComponent;
  let fixture: ComponentFixture<SiderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
