import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearListaComponent } from './formulario-crear-lista.component';

describe('FormularioCrearListaComponent', () => {
  let component: FormularioCrearListaComponent;
  let fixture: ComponentFixture<FormularioCrearListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
