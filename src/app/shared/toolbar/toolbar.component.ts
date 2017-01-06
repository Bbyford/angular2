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
    @Input() formValue: any;  //传递进来的表单的实时数据，包括修改时或者新增状态
    @Input() btnList: any[];  //按钮工具栏数组数据
    @Input() btnSwitch : boolean;  //表示grid已经触发点击事件
    @Output() Ondata : EventEmitter<any> = new EventEmitter<any>();  //把查询到的数据传递给父组件
    @Output() Disabled : EventEmitter<any> = new EventEmitter<any>(); //把表单是否能编辑状态和grid传递给父组件， true时为不可编辑，

    // @Input() btnInitModule:any;/*初始化时按钮携带参数值*/
    // @Input()btnCurrModule: any;/*点击按钮后改变值*/
    test: string;
    toggle: Boolean = true;
    show: Boolean;
    data: any;
    postData:any={};
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

     }

     //查询事件
    search():void{
        debugger;
        this.dataService.RequestPost(this.searchData.data,this.searchData.http).subscribe(res => {
            this.data = res.obj.rows;
            this.Ondata.emit(this.data);
        });      
    }

    //按钮点击事件、
    //btn表示点击事件上的数据
    MyClick(btn:any){

        //把按钮上的isave赋给组件中的iSave
        this.iSave = btn.isave;

        
        if(btn.id === "btnEdit"){
            //当点击的按钮为修改时触发
            //把按钮上的url赋给全局的URL，判断保存地址状态为insert还是updata或者为delete
            this.URL = btn.url;
            console.log(this.formValue);
            //把grid和表单状态返回给父组件
            this.Disabled.emit({disabled:false,change: false});
        }else if(btn.id === "btnCancel"){
            //当点击的按钮为取消时触发
            //把grid和表单状态返回给父组件
            this.Disabled.emit({disabled:true,change: false});
        }else if(btn.id === "btnSave"){
            //当点击的按钮为保存时触发
            //把当前状态值和数据发送到后台
            this.postData['pdata'] = this.formValue;
            this.postData['pdata']["CZY"] = "雷春花";
            let url = "mdm/finance/gsxxAction/";
            url = url + this.URL + ".action";
            this.dataService.RequestPost(this.postData,url).subscribe(res => {
            this.data = res;
            console.log(this.data);
            if(this.data.success===true){
                  console.info("提交成功");
                   //成功时把grid和表单状态返回给父组件
                  this.Disabled.emit({disabled:true,change: true});
            }else{
                alert("用户名或密码错误")
            }
        });
        }
    }

   setbtnDisable(btn:any,iSave:number):boolean{
       //控制按钮状态切换逻辑
       if(btn.id === "btnAdd"){
           if(this.iSave == 0){
               return false;
           }
       }else if(btn.id === "btnEdit" || btn.id === "btnDel"){
           if(this.iSave == 0 && !this.btnSwitch){
               return false;
           }         
       }else if(btn.id === "btnSave" || btn.id === "btnCancel"){
           if(this.iSave > 0){
                return false;
           }
       }else if(btn.id === "btnQry"){
           if(this.iSave == 2){
               return true;
           }else{
               return false;
           }
       } 
       return true;

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