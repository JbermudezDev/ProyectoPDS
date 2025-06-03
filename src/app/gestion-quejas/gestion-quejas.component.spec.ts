import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionQuejasComponent } from './gestion-quejas.component';

describe('GestionQuejasComponent', () => {
  let component: GestionQuejasComponent;
  let fixture: ComponentFixture<GestionQuejasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionQuejasComponent]
    });
    fixture = TestBed.createComponent(GestionQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
