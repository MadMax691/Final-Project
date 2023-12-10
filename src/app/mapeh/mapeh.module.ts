import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MAPEHPageRoutingModule } from './mapeh-routing.module';

import { MAPEHPage } from './mapeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MAPEHPageRoutingModule
  ],
  declarations: [MAPEHPage]
})
export class MAPEHPageModule {}
