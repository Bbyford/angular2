import { NgModule } from '@angular/core';
import { ShareModule }  from '../shared';
import { ROUTING }  from './index-app.routes';
import { HomeComponent }  from './home/home.component';
import { IndexAppComponent } from './index-app.component';

@NgModule({
  declarations: [
    HomeComponent,
    IndexAppComponent
  ],
  imports: [
    ShareModule,
    ROUTING
  ],
  providers: []
})
export class IndexAppModule { }