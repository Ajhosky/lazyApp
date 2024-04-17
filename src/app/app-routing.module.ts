import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mymodule',
   loadChildren: () => import('./mymodule/mymodule.module').then(m => m.MymoduleModule)
 },

  { path: 'mymodule2', loadChildren: () => import('./mymodule2/mymodule2.module').then(m => m.Mymodule2Module) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
