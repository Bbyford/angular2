import { NgModule } from '@angular/core';
import { ROUTING }  from './login-app.routes';
import { FormsModule }  from '@angular/forms';
import { LoginAppComponent }  from './login-app.component';
import {GetDataService} from '../core/getData-service/get-data.service';

@NgModule({
  declarations: [
    LoginAppComponent,
  ],
  imports: [
    ROUTING,
    FormsModule
  ],
  providers: [GetDataService]
})
export class LoginAppModule { }