import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasTopComponent } from './listado-peliculas-top.component';

describe('ListadoPeliculasTopComponent', () => {
  let component: ListadoPeliculasTopComponent;
  let fixture: ComponentFixture<ListadoPeliculasTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPeliculasTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPeliculasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
