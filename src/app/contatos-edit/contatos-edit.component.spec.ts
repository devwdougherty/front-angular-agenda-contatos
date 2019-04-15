import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosEditComponent } from './contatos-edit.component';

describe('ContatosEditComponent', () => {
  let component: ContatosEditComponent;
  let fixture: ComponentFixture<ContatosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
