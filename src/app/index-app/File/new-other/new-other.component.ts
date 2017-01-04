import  { Component, OnInit, Output} from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService, FormControlService, FormDataBase  }  from '../../../core';

@Component({
    selector: 'new-other',
    templateUrl: './new-other.html'
})

export class NewOtherComponent implements OnInit {
    constructor(
      private getDataService : DataService,
      private getFormControlService : FormControlService,
      private router : Router
    ) { }
    FormDatas : FormDataBase<any>[] = [];
    form: FormGroup;
    lock = false;
    lock2 = false;
    disabled = false;
    btnSwitch: boolean = true;
    expression: boolean = false;
    cars: any;
    url ="../../mock-data/defGSXX.json";
    gridurl = '../../mock-data/gridConf.json';
    gridSearchData: any;
    searchData = {
        data: {
            page: 1,
            rows: 20,
            sort: 'GSMC',
            order: 'desc',
            F_CZYID: 'A0013',
            pdata: {
                F_CZQX: "SFID",
                qrylx: "MAS_GSXX",
                F_BDJS: "000101",
                F_BDQXID: "000101"
            }
        },
        http: "http://localhost:8080/YYERP/base/funcAction/query.action"
    }
    selectedGridData: any;
    gridDataConf: any;
    cancelDataEvent(event):void{
        this.gridSearchData = event;
    }
    selectedGirdEvent(event): void{
        debugger;
        this.selectedGridData = event;
        for(let i = 0; i <this.FormDatas.length; i++){
            if(this.selectedGridData[this.FormDatas[i]["controlName"]]){
                this.form.controls[this.FormDatas[i]["controlName"]].setValue(this.selectedGridData[this.FormDatas[i]["controlName"]]);
            }else{
                this.form.controls[this.FormDatas[i]["controlName"]].setValue('');
            }                
        }
        if(!this.disabled){
            this.disabled = true;
        }
        if(this.btnSwitch){
            this.btnSwitch = false;
        }       
    }
    FormDisabled(event): void{
        this.disabled = event;
        this.expression = true;
    }
    ngOnInit(): void{
        this.getData();
        this.getGridConf();                
    }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res; console.log(res);     
          this.form = this.getFormControlService.toFormGroup(this.FormDatas);
          this.lock = true; });
    }
    getGridConf(): void {
       this.getDataService
          .getGridPZData(this.gridurl)
          .subscribe(res => {this.gridDataConf = res; console.log(res);this.lock2 = true;          
        }); 
    }
}
