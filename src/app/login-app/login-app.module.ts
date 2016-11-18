import { NgModule } from '@angular/core';
import { ROUTING }  from './login-app.routes';
import { LoginAppComponent }  from './login-app.component';

@NgModule({
  declarations: [
    LoginAppComponent,
  ],
  imports: [
    ROUTING
  ],
  providers: []
})
export class LoginAppModule { }