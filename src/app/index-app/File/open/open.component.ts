import  { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService, FormControlService, FormDataBase  }  from '../../../core';

@Component({
    selector: 'open',
    templateUrl: './open.html',
    providers: [ DataService,FormControlService ]
})

export class OpenComponent implements OnInit {
    FormDatas : FormDataBase<any>[] = [];
    form: FormGroup;
    lock = false;
    url = "../../mock-data/formData.json";
    constructor(
      private getDataService : DataService,
      private getFormControlService : FormControlService,
      private router : Router
    ) { }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res; console.log(res);     
          this.form = this.getFormControlService.toFormGroup(this.FormDatas);
          this.lock = true; });
    }
    ngOnInit(): void{
        this.getData();
        
         
    }
    ngAfterContentInit() { 
        // this.form.setValue({"GSID":"SJFKSJFK"}); 
        // this.form.controls["GSID"].value="AFJSKJFK";
    }
    test(){
        console.log(this.form);
         console.log(this.form.controls["GSID"].value);
         this.form.controls["GSID"].setValue(2);
         this.form.setValue({"GSID":2222,"GSMC":"YUANYUAN","GSJC":"13","GSYWMC":"abc","GJID":"zhongguo","SFID":"guangdong","CSID":"guangzhou","CKJB":"中心仓","YXBJ":1,"Date":new Date("2016-12-31")});
    }
}
