import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuejasComponent } from './dashboard-quejas.component';

describe('DashboardQuejasComponent', () => {
  let component: DashboardQuejasComponent;
  let fixture: ComponentFixture<DashboardQuejasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardQuejasComponent]
    });
    fixture = TestBed.createComponent(DashboardQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
