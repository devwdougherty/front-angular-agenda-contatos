import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosDeleteComponent } from './contatos-delete.component';

describe('ContatosDeleteComponent', () => {
  let component: ContatosDeleteComponent;
  let fixture: ComponentFixture<ContatosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
