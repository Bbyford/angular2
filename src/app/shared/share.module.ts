import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { SiderNavComponent }  from "./sider-nav/sider-nav.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SiderNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SiderNavComponent
  ]
})
export class ShareModule { }