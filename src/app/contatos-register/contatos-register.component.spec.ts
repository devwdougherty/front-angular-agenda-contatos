import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosRegisterComponent } from './contatos-register.component';

describe('ContatosRegisterComponent', () => {
  let component: ContatosRegisterComponent;
  let fixture: ComponentFixture<ContatosRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
