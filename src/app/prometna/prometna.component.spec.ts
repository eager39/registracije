import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrometnaComponent } from './prometna.component';

describe('PrometnaComponent', () => {
  let component: PrometnaComponent;
  let fixture: ComponentFixture<PrometnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrometnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrometnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
