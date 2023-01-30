import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "./listar";
import { CadastrarTarefasComponent } from "./cadastrar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas'
        , redirectTo: 'tarefas/listar'
    },
    {
        path: "tarefas/listar",
        component: ListarTarefaComponent
    },
    {
        path: "tarefas/cadastrar",
        component: CadastrarTarefasComponent
    }/*,
    {
        path: "tarefas/editar/:id",
        component: EditarTarefaComponent
    }*/
];

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */