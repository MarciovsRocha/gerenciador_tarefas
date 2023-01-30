import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit{

  // lista de tarefas 
  tarefas: Tarefa[];
  
  constructor(private tarefaService: TarefaService) {}

  // mÃ©todo executado quando criado um objeto
  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  // retorna uma lista de tarefas obtidas pelo Service de Tarefa
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  // remover o elemento passado por parâmetro
  remover($event: any, tarefa: Tarefa){
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "'+tarefa.nome+'"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
}

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */