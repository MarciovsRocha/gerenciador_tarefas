import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  private gravarAlteracoes(tarefas: Tarefa[]): void{
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // lista todas as tarefas que estar�o armazenadas no localstorage
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  // cadastar a nova tarefa 
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    this.gravarAlteracoes(tarefas);
  }

  // busca uma tarefa pelo ID 
  buscarPorId(id:number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  // atualiza uma tarefa
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[]= this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    this.gravarAlteracoes(tarefas);
  };

  // removar a tarefa
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id != id);
    this.gravarAlteracoes(tarefas);
  }

  // altera o status da tarefa
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) =>{
      if (obj.id == id){
        objs[index].concluida = ! obj.concluida;
      }
    });
    this.gravarAlteracoes(tarefas);
  }


}

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */