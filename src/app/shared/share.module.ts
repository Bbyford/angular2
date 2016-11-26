import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ButtonModule} from 'primeng/primeng';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ButtonModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class ShareModule { }