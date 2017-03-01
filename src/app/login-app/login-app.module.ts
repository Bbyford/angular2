import { NgModule } from '@angular/core';
import { loginRoutes }  from './login-app.routes';
import { FormsModule }  from '@angular/forms';
import { LoginAppComponent }  from './login-app.component';
import { DataService} from '../core';

@NgModule({
  declarations: [
    LoginAppComponent,
  ],
  imports: [
    loginRoutes,
    FormsModule
  ],
  providers: [DataService]
})
export class LoginAppModule { }