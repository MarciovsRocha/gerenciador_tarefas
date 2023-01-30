import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from "./tarefas";

const routes: Routes = [
  // para a URL padr�o deve-se exibir a lista de tarefas
  {
    path: '',
    redirectTo: 'tarefas/listar',
    pathMatch: "full"
  },
  // concatena o array de rotas de TarefaRoutes ao array que ser� criado 
  ...TarefaRoutes 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */