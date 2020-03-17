import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCrearListaComponent } from './snackbar-crear-lista.component';

describe('SnackbarCrearListaComponent', () => {
  let component: SnackbarCrearListaComponent;
  let fixture: ComponentFixture<SnackbarCrearListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarCrearListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarCrearListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
