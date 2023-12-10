import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MAPEHPage } from './mapeh.page';

const routes: Routes = [
  {
    path: 'mapeh',
    component: MAPEHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MAPEHPageRoutingModule {}
