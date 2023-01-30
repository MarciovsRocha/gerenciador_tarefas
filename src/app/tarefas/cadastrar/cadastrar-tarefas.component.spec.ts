import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefasComponent } from './cadastrar-tarefas.component';

describe('CadastrarTarefasComponent', () => {
  let component: CadastrarTarefasComponent;
  let fixture: ComponentFixture<CadastrarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTarefasComponent);
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