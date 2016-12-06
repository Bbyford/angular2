import  { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
@Component({
    selector: 'new-project',
    templateUrl: './new-project.html',
    styleUrls: ['./new-project.css']
})

export class NewProjectComponent implements OnInit {
    ckbj : SelectItem[];
    selected: string;
    model = {
        name : null
    }
    constructor() { }
    ngOnInit() {
        this.ckbj = [];
        this.ckbj.push({label:'请选择仓库级别',value:null});
        this.ckbj.push({label:'中心仓',value:{name:'中心仓'}});
        this.ckbj.push({label:'区域中心仓',value:{name:'区域中心仓'}});
        this.ckbj.push({label:'门店仓库',value:{name:'门店仓库'}});
    }
    
}
