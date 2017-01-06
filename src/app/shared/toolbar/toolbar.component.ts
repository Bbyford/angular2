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
    @Input() btnList: any[];
    @Input() btnSwitch : boolean;
    @Output() Ondata : EventEmitter<any> = new EventEmitter<any>();
    @Output() Disabled : EventEmitter<any> = new EventEmitter<any>();

    // @Input() btnInitModule:any;/*初始化时按钮携带参数值*/
    // @Input()btnCurrModule: any;/*点击按钮后改变值*/
    test: string;
    toggle: Boolean = true;
    show: Boolean;
    data: any;
    URL:string;
    iDJZT:number;
    iSave: number = 0;
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
        console.log(event.disabled);
        event.disabled = true;
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
        debugger;
        this.dataService.RequestPost(this.searchData.data,this.searchData.http).subscribe(res => {
            this.data = res.obj.rows;
            this.Ondata.emit(this.data);
            this.toggle = false;
        }); 
        this.iSave = 2;
       
    }
    getDJZT(btn:any){
        this.DJZT[btn.target].iSave;
    }
    MyClick(btn:any){
        console.log(1);
        console.info("FUCK YOU")!
    }

   setbtnDisable(btn:any,iSave:number):boolean{
       if(btn.id === "btnEdit"){
           if(btn.isave == iSave){
               return true;
           }         
       } 

    //    this.btnInitModule["btnSave"].disabled= 1>0;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
    //    this.btnInitModule["btnEdit"].disabled= this.btnCurrModule.isave>0 && this.btnCurrModule.iDJZT==0 && this.btnCurrModule.iFlag==1;
   }

}