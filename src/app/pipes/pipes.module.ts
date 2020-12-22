import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {indianNumber,percent} from './custom.pipe';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [percent,indianNumber],
  exports: [percent,indianNumber],
  providers: [percent,indianNumber]
})
export class PipesModule { }
