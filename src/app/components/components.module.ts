import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DirectiveModule } from '../directives/directive.module';
import { AngularMaterialsModule } from '../modules/angular-materials/angular-materials.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectiveModule,
    AngularMaterialsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right'
      }
    ),
  ],
  exports: [
  LoginComponent
  ]
})
export class ComponentsModule { }
