import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent }    from './login-app.component';

export const ROUTER_CONFIG: Routes = [
    { 
        path:'login',
        component: LoginAppComponent,
        children: [
            
        ]


    }
]

export const loginRoutes = RouterModule.forChild(ROUTER_CONFIG);