import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoQuejasComponent } from './estado-quejas.component';

describe('EstadoQuejasComponent', () => {
  let component: EstadoQuejasComponent;
  let fixture: ComponentFixture<EstadoQuejasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoQuejasComponent]
    });
    fixture = TestBed.createComponent(EstadoQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
