import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'folder/:mapeh',
    loadChildren: () => import('./mapeh/mapeh.module').then( m => m.MAPEHPageModule)
  },
  {
    path: 'folder/:filipino',
    loadChildren: () => import('./filipino/filipino.module').then( m => m.FilipinoPageModule)
  },
  {
    path: 'folder/:english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'folder/:math',
    loadChildren: () => import('./math/math.module').then( m => m.MathPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
