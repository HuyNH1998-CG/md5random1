import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {ListComponent} from "./list/list.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
