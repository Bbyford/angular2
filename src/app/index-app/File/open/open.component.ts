import  { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService  }  from '../../../core';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'open',
    templateUrl: './open.html'
})

export class OpenComponent implements OnInit {
    FormDatas : any;
    url = "../../mock-data/formData.json";
    constructor(
      private getDataService : DataService,
      private router : Router
    ) { }

    getData(): void {
      this.getDataService
          .getDate(this.url)
          .subscribe(res => {this.FormDatas = res;console.log(res)});
    }
    ngOnInit(): void{
        this.getData();
    }
}
