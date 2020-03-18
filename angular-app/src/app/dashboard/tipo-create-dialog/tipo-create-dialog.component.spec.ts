import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCreateDialogComponent } from './tipo-create-dialog.component';

describe('TipoCreateDialogComponent', () => {
  let component: TipoCreateDialogComponent;
  let fixture: ComponentFixture<TipoCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
