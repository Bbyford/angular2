import  { Component, OnInit, Output, OnDestroy, AfterViewInit,ViewChild,OnChanges,SimpleChanges} from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService, FormControlService, FormDataBase  }  from '../../../core';
import {DataConfigService} from '../../../core/data-config.service';
import {ToolbarComponent  } from '../../../shared/toolbar/toolbar.component';
import { MyDialogComponent } from '../../../shared/mydialog/mydialog.component';

@Component({
    selector: 'new-other',
    templateUrl: './new-other.html'
})

export class NewOtherComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    @ViewChild(ToolbarComponent)
    private toobalComponent: ToolbarComponent;
    @ViewChild(MyDialogComponent)
    private mydialog: MyDialogComponent;
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
            this.URL = data["URL"];
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
    readyOnly = true;
    btnSwitch: boolean = true;
    expression: boolean = false;
    url ="../../mock-data/defGSXX.json";
    gridurl = '../../mock-data/gridConf.json';
    gridSearchData: any;
    searchData = {
        data: {
            page: 1,
            rows: 100,
            sort: 'GSMC',
            order: 'desc',
            F_CZYID: 'A0013',
            F_CZLX: 'CX',
            pdata: {
                F_CZQX: "SFID",
                qrylx: "MAS_GSXX",
                F_BDJS: "000101",
                F_BDQXID: "000102",
                "page": 1,
                "rows":100,
                "totle":0
            }
        },
        http: "../../mock-data/searchData.json"
    }
    selectedGridData: any;
    selected: any;
    gridDataConf: any;
    iSave: number = 0;
    URL: string = '';
    display: boolean = false;

    cancelDataEvent(event):void{
        this.gridSearchData = event;
    }
    selectedGirdEvent(event): void{
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
    dialogselectedGirdEvent(event): void{
        
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
        if(event.disabled){
            debugger;
            let disableField = event.disabled.split(";");
            for(let i = 0; i < this.FormDatas.length; i++){
                for(let j = 0; j < disableField.length; j++){
                    if(this.FormDatas[i]['controlName'] == disableField[j]){
                        this.FormDatas[i]['readyOnly'] = true;
                    }
                }
            }
        }

    }
    DialogDisplay(event:boolean){
        this.mydialog.display = true;;
    }
    ngOnInit(): void{
        console.log(this.form);

    }
    ngAfterViewInit (){
        console.log(this.form);
    }
    ngOnDestroy() {
        this.iSave = this.toobalComponent.iSave;
        this.URL = this.toobalComponent.URL;
        this.dataConfigService.setCDNMData("defGSXX",{gridDataConf:this.gridDataConf,form: this.form,gridSearchData:this.gridSearchData,formValue: this.form['value'],FormDatas:this.FormDatas,btnList:this.btnList,readyOnly:this.readyOnly,expression:this.expression,selectedGridData:this.selectedGridData,selected:this.selected,iSave:this.iSave,btnSwitch:this.btnSwitch,URL:this.URL})
    }
    ngOnChanges(changes: SimpleChanges) {
        debugger;
    // changes.prop contains the old and the new value...
    }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res["data"]; this.btnList = res["btnList"];
          this.form = this.getFormControlService.toFormGroup(this.FormDatas);
          this.lock = true;
        let gsid = this.form.controls["BZ"];
        gsid.valueChanges.subscribe(
        (value: string) => {
        console.log('sku changed to:', value);
            }
        );
    });
    }
    getGridConf(): void {
       this.getDataService
          .getGridPZData(this.gridurl)
          .subscribe(res => {this.gridDataConf = res;this.lock2 = true;
        });
    }
}
