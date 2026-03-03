import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitosComplementaresComponent } from './ritos-complementares.component';

describe('RitosComplementaresComponent', () => {
  let component: RitosComplementaresComponent;
  let fixture: ComponentFixture<RitosComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitosComplementaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RitosComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
