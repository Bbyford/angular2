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
    @Input() form : any; //把form对象传递进来
    @Input() formValue: any;  //传递进来的表单的实时数据，包括修改时或者新增状态
    @Input() btnList: any[];  //按钮工具栏数组数据
    @Input() btnSwitch : boolean;  //表示grid已经触发点击事件
    @Input() iSave: number;
    @Output() Ondata : EventEmitter<any> = new EventEmitter<any>();  //把查询到的数据传递给父组件
    @Output() Disabled : EventEmitter<any> = new EventEmitter<any>(); //把表单是否能编辑状态和grid传递给父组件， true时为不可编辑，

    // @Input() btnInitModule:any;/*初始化时按钮携带参数值*/
    // @Input()btnCurrModule: any;/*点击按钮后改变值*/

    data: any;
    postData:any={}; //传送到后台的数据，把数据赋给 pdata
    URL:string;
    iDJZT:number;
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
            if(this.URL == "update"){
                this.Disabled.emit({readyOnly:true,expression: false,change: true,index:this.getIndex()});
            }else{
                if(this.form["valid"]){
                    this.Disabled.emit({readyOnly:true,expression: false,change: true});
                }             
            }
        });      
    }

    //获得新查询结果和修改前对应的下标，把下标传递给父组件  目前方法为固定，后期应该把参数传递进来或者其他方式传递
    getIndex(): number{
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i]["GSID"] == this.formValue["GSID"]){
                return i;
            }
        }
    }

    //按钮点击事件、
    //btn表示点击事件上的数据
    MyClick(btn:any){

        //把按钮上的isave赋给组件中的iSave
        this.iSave = btn.isave;
        if(btn.id === "btnAdd"){
            console.log(this.form);
            this.URL = btn.url;
            for(var key in this.form["controls"]){
                this.form["controls"][key].setValue('');
            }
            this.Disabled.emit({readyOnly:false,expression: true});
        }else if(btn.id === "btnEdit"){
            //当点击的按钮为修改时触发
            //把按钮上的url赋给全局的URL，判断保存地址状态为insert还是updata或者为delete           
            this.URL = btn.url;
            //把grid和表单状态返回给父组件
            this.Disabled.emit({readyOnly:false,expression: true,disabled: btn.disable});
        }else if(btn.id === "btnCancel"){
            //当点击的按钮为取消时触发
            //把grid和表单状态返回给父组件
            if(this.URL == 'update'){
                this.Disabled.emit({readyOnly:true,expression: false,change: true});
            }else if(this.URL == 'insert'){
                for(var key in this.form["controls"]){
                    this.form["controls"][key].setValue('');
                }
                this.Disabled.emit({readyOnly:false,expression: false});
            }
            this.URL = null;
            
        }else if(btn.id === "btnSave"){
            //当点击的按钮为保存时触发
            //把当前状态值和数据发送到后台
            this.postData['pdata'] = this.formValue;
            this.postData['pdata']["CZY"] = "雷春花";
            let url = "mdm/finance/gsxxAction/";  //保存地址后期已经由父组件传递进来
            url = url + this.URL + ".action";
            this.dataService.RequestPost(this.postData,url).subscribe(res => {
            this.data = res; // res为获得的数据
            console.log(this.data);
            if(this.data.success===true){
                  console.info("提交成功");
                   //成功时把grid和表单状态返回给父组件
                  if(this.URL == 'update'){
                      this.search();
                  }
            }else{
                alert("用户名或密码错误")
            }
        });
        }else if(btn.id === "btnQry"){
            this.search();
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
           if(this.iSave == 2 || this.URL == 'insert'){
               return true;
           }else{
               return false;
           }
       } 
       return true;
   }

}