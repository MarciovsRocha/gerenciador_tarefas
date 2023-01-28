import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from "./tarefas";

const routes: Routes = [
  // para a URL padrão deve-se exibir a lista de tarefas
  {
    path: '',
    redirectTo: 'tarefas/listar',
    pathMatch: "full"
  },
  // concatena o array de rotas de TarefaRoutes ao array que será criado 
  ...TarefaRoutes 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
