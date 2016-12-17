import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../../core'

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css'],
    providers: [DataService]
})
export class ToolbarComponent implements OnInit {
    @Input('searchData') searchData: any;
    @Output() Ondata : EventEmitter<any> = new EventEmitter<any>();
    toggle: Boolean = true;
    show: Boolean;
    data: any;
    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.show = true;
     }
    add():void{
        this.toggle = false;
    }
    save():void{
        this.toggle = true;
        
    }
    cancel():void{
        this.toggle = true;
        console.log(this.searchData);
    }
    search():void{
        this.dataService.RequestPost(this.searchData.data,this.searchData.http).subscribe(res => {
            this.data = res.obj.rows;
            this.Ondata.emit(this.data);
        }); 
       
    }

}