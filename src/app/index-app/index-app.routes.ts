import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent }    from './home';
import { IndexAppComponent }    from './index-app.component';

export const ROUTER_CONFIG: Routes = [
    { 
        path:'index',
        component: IndexAppComponent,
        children: [
            {path:'home',component:HomeComponent}
        ]


    },
]

export const ROUTING = RouterModule.forChild(ROUTER_CONFIG);