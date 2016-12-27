import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ButtonModule, DropdownModule,CheckboxModule,CalendarModule} from 'primeng/primeng';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormBaseComponent } from './dymaic-form/base.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    FormBaseComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    FormBaseComponent
  ]
})
export class ShareModule { }