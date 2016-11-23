import { NgModule } from '@angular/core';
import { ROUTING }  from './login-app.routes';
import { FormsModule }  from '@angular/forms';
import { LoginAppComponent }  from './login-app.component';

@NgModule({
  declarations: [
    LoginAppComponent,
  ],
  imports: [
    ROUTING,
    FormsModule
  ],
  providers: []
})
export class LoginAppModule { }