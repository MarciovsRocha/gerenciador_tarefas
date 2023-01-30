import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefasComponent } from './editar-tarefas.component';

describe('EditarTarefasComponent', () => {
  let component: EditarTarefasComponent;
  let fixture: ComponentFixture<EditarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */