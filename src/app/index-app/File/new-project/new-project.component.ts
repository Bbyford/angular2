import  { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {BlockUIService} from '../../../core';
@Component({
    selector: 'new-project',
    templateUrl: './new-project.html',
    styleUrls: ['./new-project.css'],
    providers: [BlockUIService]
})

export class NewProjectComponent implements OnInit {
    ckbj : SelectItem[];
    selected: string;
    blockUI: Boolean;
    value: any;
    model = {
        name : null
    }
    constructor(
        private blockUIService: BlockUIService
        ) {
    }
    ngOnInit() {
        this.blockUIService.blockUIEvent.subscribe(event => this.blockUnBlockUI(event));
        this.blockUIService.blockUIEvent.emit({
        value: true
        });
        this.ckbj = [];
        this.ckbj.push({label:'请选择仓库级别',value:null});
        this.ckbj.push({label:'中心仓',value:{name:'中心仓'}});
        this.ckbj.push({label:'区域中心仓',value:{name:'区域中心仓'}});
        this.ckbj.push({label:'门店仓库',value:{name:'门店仓库'}});
    }
    private blockUnBlockUI(event) {
      this.blockUI = event.value;
    }   
}
