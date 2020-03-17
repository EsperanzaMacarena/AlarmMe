import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistListadoComponent } from './watchlist-listado.component';

describe('WatchlistListadoComponent', () => {
  let component: WatchlistListadoComponent;
  let fixture: ComponentFixture<WatchlistListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
