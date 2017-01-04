import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ButtonModule, DropdownModule,CheckboxModule,CalendarModule,DataTableModule} from 'primeng/primeng';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormBaseComponent } from './dymaic-form/base.component';
import { searchGridComponent } from './searchGrid/searchGrid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    FormBaseComponent,
    searchGridComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    DataTableModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    FormBaseComponent,
    searchGridComponent
  ]
})
export class ShareModule { }