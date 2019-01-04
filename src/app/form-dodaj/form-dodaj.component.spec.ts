import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajComponent } from './form-dodaj.component';

describe('FormDodajComponent', () => {
  let component: FormDodajComponent;
  let fixture: ComponentFixture<FormDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
