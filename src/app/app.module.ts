import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefasModule } from './tarefas';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
