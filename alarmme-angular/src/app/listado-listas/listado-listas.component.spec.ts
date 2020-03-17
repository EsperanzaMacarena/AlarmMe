import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoListasComponent } from './listado-listas.component';

describe('ListadoListasComponent', () => {
  let component: ListadoListasComponent;
  let fixture: ComponentFixture<ListadoListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
