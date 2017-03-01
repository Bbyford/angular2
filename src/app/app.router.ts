import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAppComponent }    from './index-app/index-app.component';
import { LoginAppComponent }    from './login-app/login-app.component';

export const ROUTER_CONFIG: Routes = [
    { path:'',pathMatch:'full', redirectTo:'login'},
    { path:'index',component:IndexAppComponent},
    { path:'login',component:LoginAppComponent},
]

export const myappRoutes = RouterModule.forRoot(ROUTER_CONFIG);