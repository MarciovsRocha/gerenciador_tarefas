import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRemoverComponent } from './btn-remover.component';

describe('BtnRemoverComponent', () => {
  let component: BtnRemoverComponent;
  let fixture: ComponentFixture<BtnRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
