import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'convidados', loadChildren: './convidados/convidados.module#ConvidadosPageModule' },
  { path: 'edit-convidado', loadChildren: './edit-convidado/edit-convidado.module#EditConvidadoPageModule' },
  { path: 'edit-convidado/:id', loadChildren: './edit-convidado/edit-convidado.module#EditConvidadoPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
