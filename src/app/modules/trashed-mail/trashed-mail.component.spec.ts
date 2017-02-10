/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrashedMailComponent } from './trashed-mail.component';

describe('TrashedMailComponent', () => {
  let component: TrashedMailComponent;
  let fixture: ComponentFixture<TrashedMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashedMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
