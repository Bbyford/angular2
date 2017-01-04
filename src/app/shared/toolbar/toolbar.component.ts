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
    @Input() btnSwitch : boolean;
    @Output() Ondata : EventEmitter<any> = new EventEmitter<any>();
    @Output() Disabled : EventEmitter<any> = new EventEmitter<any>();
    toggle: Boolean = true;
    show: Boolean;
    data: any;
    URL:string;
    iDJZT:number;
    @Input() 
    get DJZT(){return this.iDJZT};
    set DJZT(value){this.iDJZT=value};
    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.show = true;
     }
    add(event: any):void{
        debugger;
        console.info(this.DJZT);
        this.URL="insert" ;   
    }
    edit(): void{
        console.info(this.URL);
        console.info(this.iDJZT);
        this.Disabled.emit(false);
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
            this.toggle = false;
        }); 
       
    }
    getDJZT(btn:any){
        this.DJZT[btn.target].iSave;
    }

}