import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { BtnEditarComponent } from '../botoes/btn-editar/btn-editar.component';
import { BtnRemoverComponent } from '../botoes/btn-remover/btn-remover.component';
import { BtnAdicionarComponent } from '../botoes/btn-adicionar/btn-adicionar.component';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    BtnEditarComponent,
    BtnRemoverComponent,
    BtnAdicionarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
