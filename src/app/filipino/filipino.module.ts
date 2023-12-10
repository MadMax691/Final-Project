import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilipinoPageRoutingModule } from './filipino-routing.module';

import { FilipinoPage } from './filipino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilipinoPageRoutingModule
  ],
  declarations: [FilipinoPage]
})
export class FilipinoPageModule {}
