import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassword2Component } from './recover-password2.component';

describe('RecoverPassword2Component', () => {
  let component: RecoverPassword2Component;
  let fixture: ComponentFixture<RecoverPassword2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPassword2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
