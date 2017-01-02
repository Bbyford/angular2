import  { Component, OnInit } from '@angular/core';
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
    cars: any;
    url ="../../mock-data/defGSXX.json";
    cancelData: any;
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
    cancelDataEvent(event):void{
        this.cancelData = event;
    }
    ngOnInit(): void{
        this.getData();                
    }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res; console.log(res);     
          this.form = this.getFormControlService.toFormGroup(this.FormDatas);
          this.lock = true; });
    }
}
