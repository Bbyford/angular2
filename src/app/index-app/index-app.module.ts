// modules
import { NgModule } from '@angular/core';
import { ShareModule }  from '../shared';
import { AccordionModule,DropdownModule,AutoCompleteModule,PanelModule,CheckboxModule,DataTableModule} from 'primeng/primeng';

// routes
import { ROUTING }  from './index-app.routes';

// components
import { HomeComponent }  from './home/home.component';
import { SiderNavComponent  }   from './sider-nav/sider-nav.component';
import { NewProjectComponent }    from './File/new-project/new-project.component';
import { NewOtherComponent }    from './File/new-other/new-other.component';
import { OpenComponent }    from './File/open/open.component';
import { QuitComponent }    from './File/quit/quit.component';
import { EditSaveComponent }    from './Action/edit-save/edit-save.component';
import { EditUpdateComponent }    from './Action/edit-update/edit-update.component';
import { OtherDeleteComponent }    from './Action/other-delete/other-delete.component';
import { RedoComponent }    from './Edit/redo/redo.component';
import { UndoComponent }    from './Edit/undo/undo.component';
import { ContentsComponent }    from './Help/contents/contents.component';
import { SearchFileComponent }    from './Help/search-file/search-file.component';
import { SearchTextComponent }    from './Help/search-text/search-text.component';
import { SidebarComponent}  from './aside/sidebar';
import { IndexAppComponent } from './index-app.component';

import { DataConfigService } from '../core/data-config.service';

@NgModule({
  declarations: [
    HomeComponent,
    SiderNavComponent,
    IndexAppComponent,
    NewProjectComponent,
    NewOtherComponent,
    OpenComponent,
    QuitComponent,
    EditSaveComponent,
    EditUpdateComponent,
    OtherDeleteComponent,
    RedoComponent,
    UndoComponent,
    ContentsComponent,
    SearchFileComponent,
    SearchTextComponent,
    SidebarComponent
  ],
  imports: [
    ShareModule,
    AutoCompleteModule,
    AccordionModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    DataTableModule,
    ROUTING
  ],
  providers: [DataConfigService]
})
export class IndexAppModule { }