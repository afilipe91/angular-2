/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JeuUniqueComponent } from './jeu-unique.component';

describe('JeuUniqueComponent', () => {
  let component: JeuUniqueComponent;
  let fixture: ComponentFixture<JeuUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
