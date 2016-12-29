import { NgModule, SkipSelf, Optional } from '@angular/core';
import { DataService } from './data.service';
import { BlockUIService } from './blockUi.service';
import { HttpModule } from '@angular/http';
import { FormControlService } from './toFormGroup.service'
@NgModule({
    imports: [
        HttpModule        
    ],
    providers: [
        DataService,
        FormControlService,
        BlockUIService
    ]
})

export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}