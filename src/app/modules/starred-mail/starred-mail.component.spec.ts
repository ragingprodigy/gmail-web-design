/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StarredMailComponent } from './starred-mail.component';

describe('StarredMailComponent', () => {
  let component: StarredMailComponent;
  let fixture: ComponentFixture<StarredMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
