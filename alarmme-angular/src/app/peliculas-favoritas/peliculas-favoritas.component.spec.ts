import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFavoritasComponent } from './peliculas-favoritas.component';

describe('PeliculasFavoritasComponent', () => {
  let component: PeliculasFavoritasComponent;
  let fixture: ComponentFixture<PeliculasFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
