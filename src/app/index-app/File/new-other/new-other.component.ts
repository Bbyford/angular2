import  { Component, OnInit, Output, OnDestroy, AfterViewInit,ViewChild} from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService, FormControlService, FormDataBase  }  from '../../../core';
import {DataConfigService} from '../../../core/data-config.service';
import {ToolbarComponent  } from '../../../shared/toolbar/toolbar.component';

@Component({
    selector: 'new-other',
    templateUrl: './new-other.html'
})

export class NewOtherComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(ToolbarComponent)
    private toobalComponent: ToolbarComponent;
    constructor(
      private dataConfigService:DataConfigService,
      private getDataService : DataService,
      private getFormControlService : FormControlService,
      private router : Router
    ) { 
        debugger;
        let data = this.dataConfigService.getCDNMData("defGSXX");
        if(data){          
            this.lock = true;
            this.lock2 = true;
            this.gridDataConf = data["gridDataConf"];
            this.form = data["form"];
            this.gridSearchData = data["gridSearchData"];
            this.FormDatas = data["FormDatas"];
            this.btnList = data["btnList"];
            this.readyOnly = data["readyOnly"];
            this.expression = data["expression"];
            this.selectedGridData = data["selectedGridData"];
            this.selected = data["selected"];
            this.iSave = data["iSave"];
            this.btnSwitch = data["btnSwitch"];
        }else{
            this.getData();
            this.getGridConf(); 
        }
    }
    FormDatas : FormDataBase<any>[] = [];
    btnList: any[];
    form: FormGroup;
    lock = false;
    lock2 = false;
    readyOnly = false;
    btnSwitch: boolean = true;
    expression: boolean = false;
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
        http: "base/funcAction/query.action"
    }
    selectedGridData: any;
    selected: any;
    gridDataConf: any;
    iSave: number = 0;
    
    cancelDataEvent(event):void{
        this.gridSearchData = event;
    }
    selectedGirdEvent(event): void{
        debugger;
        this.selectedGridData = event;
        this.selected = event;
        this.setFormValue(this.selectedGridData);
        if(!this.readyOnly){
            this.readyOnly = true;
        }
        if(this.btnSwitch){
            this.btnSwitch = false;
        }       
    }

    setFormValue(Data: any): void{
        for(let i = 0; i <this.FormDatas.length; i++){
            if(Data[this.FormDatas[i]["controlName"]]){
                this.form.controls[this.FormDatas[i]["controlName"]].setValue(Data[this.FormDatas[i]["controlName"]]);
            }else{
                this.form.controls[this.FormDatas[i]["controlName"]].setValue('');
            }                
        }
    }

    FormDisabled(event:any): void{
        debugger;
        this.readyOnly = event["readyOnly"];
        this.expression = event["expression"];
        
        if(event["index"] != undefined){
            this.selected = this.gridSearchData[event["index"]];
            this.selectedGridData = this.selected;
        }
        if(event["change"]){
          if(this.selectedGridData){
            this.setFormValue(this.selectedGridData);
            this.readyOnly = true; 
          }           
        }
        if(event.disable){
            let disableField = event.disable.split(";");
            for(let i = 0; i < disableField.length; i++){
                for(let j = 0; j < this.FormDatas.length; j++){
                    if(this.FormDatas[j]['controlName'] == disableField[i]){
                        this.FormDatas[j]['disabled'] = false;
                    }
                }
            }
        }
        
    }
    ngOnInit(): void{
        
            
    }
    ngAfterViewInit (){
        console.log(this.toobalComponent)  
    }
    ngOnDestroy() {
        debugger;
        this.iSave = this.toobalComponent.iSave;
        this.dataConfigService.setCDNMData("defGSXX",{gridDataConf:this.gridDataConf,form: this.form,gridSearchData:this.gridSearchData,formValue: this.form['value'],FormDatas:this.FormDatas,btnList:this.btnList,readyOnly:this.readyOnly,expression:this.expression,selectedGridData:this.selectedGridData,selected:this.selected,iSave:this.iSave,btnSwitch:this.btnSwitch})
    }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res["data"]; this.btnList = res["btnList"];     
          this.form = this.getFormControlService.toFormGroup(this.FormDatas);
          this.lock = true; });
    }
    getGridConf(): void {
       this.getDataService
          .getGridPZData(this.gridurl)
          .subscribe(res => {this.gridDataConf = res;this.lock2 = true;          
        }); 
    }
}
