import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciencePage } from './science.page';

const routes: Routes = [
  {
    path: 'science',
    component: SciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciencePageRoutingModule {}
