import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }    from './home';
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
import {SidebarComponent}    from './aside/sidebar';
import { IndexAppComponent }    from './index-app.component';

export const ROUTER_CONFIG: Routes = [
    { 
        path:'index',
        component: IndexAppComponent,
        children: [
            {path:'home',component:HomeComponent},
            {path:'New/Project',component:NewProjectComponent},
            {path:'New/Other',component:NewOtherComponent},
            {path:'File/Open',component:OpenComponent},
            {path:'File/Quit',component:QuitComponent},
            {path:'Edit/Save',component:EditSaveComponent},
            {path:'Edit/Update',component:EditUpdateComponent},
            {path:'Other/Delete',component:OtherDeleteComponent},
            {path:'Edit/Redo',component:RedoComponent},
            {path:'Edit/Undo',component:UndoComponent},
            {path:'Help/Contents',component:ContentsComponent},
            {path:'Search/File',component:SearchFileComponent},
            {path:'Search/Text',component:SearchTextComponent},
            {path:'side',component:SidebarComponent},
        ]
    },
]

export const ROUTING = RouterModule.forChild(ROUTER_CONFIG);