import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ROUTING }  from './app.router';

import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { IndexAppModule }  from './index-app/index-app.module';
import { LoginAppModule }  from './login-app/login-app.module';
import { ShareModule }  from './shared';
import { GetDataService }  from './core/getData-service/get-data.service'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    IndexAppModule,
    LoginAppModule,
    ROUTING
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
