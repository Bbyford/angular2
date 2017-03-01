import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { FormsModule} from '@angular/forms';


import { myappRoutes }  from './app.router';

import { AppComponent } from './app.component';
import { IndexAppModule }  from './index-app/index-app.module';
import { LoginAppModule }  from './login-app/login-app.module';
import { ShareModule }  from './shared';
import { CoreModule } from './core';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    HttpModule,
    CoreModule,
    IndexAppModule,
    LoginAppModule,
    myappRoutes
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
