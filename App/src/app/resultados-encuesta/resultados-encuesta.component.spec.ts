import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEncuestaComponent } from './resultados-encuesta.component';

describe('ResultadosEncuestaComponent', () => {
  let component: ResultadosEncuestaComponent;
  let fixture: ComponentFixture<ResultadosEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
