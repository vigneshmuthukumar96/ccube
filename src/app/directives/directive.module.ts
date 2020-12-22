import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dotRestrictDirective, OnlynumberDirective } from './custom.directive';

@NgModule({
    imports: [
        CommonModule
      ],
      declarations: [
         dotRestrictDirective,
         OnlynumberDirective
      ],
      exports: [
        dotRestrictDirective,
        OnlynumberDirective
      ]
})
export class DirectiveModule {}