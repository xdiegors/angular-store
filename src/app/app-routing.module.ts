import { Erro404Component } from './components/erro404/erro404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', component: Erro404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
