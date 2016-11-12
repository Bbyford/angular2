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
    url = "../../mock-data/formData.json";
    constructor(
      private getDataService : DataService,
      private getFormControlService : FormControlService,
      private router : Router
    ) { }
    getData(): void {
      this.getDataService
          .getFormData(this.url)
          .subscribe(res => {this.FormDatas = res; console.log(res); this.form = this.getFormControlService.toFormGroup(this.FormDatas);});
    }
    ngOnInit(): void{
        debugger;
        this.getData();
    }
}
