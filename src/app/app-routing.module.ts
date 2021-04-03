import { isNgTemplate } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StorageService, Item} from './storage.service'


const routes: Routes = [
  
  {
    path: 'home/:name',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('../pages/login/Modals/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('../pages/login/coach/coach.module').then( m => m.CoachPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
