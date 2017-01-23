import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormDataBase } from './formdata-base';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(FormDatas: FormDataBase<any>[] ) {
    let group: any = {};

    FormDatas.forEach(FormData => {
      if(FormData["groupName"]){
          let ngroup = {};
          FormData["groupData"].forEach(grouData =>{
              ngroup[grouData.controlName] = grouData.required ? new FormControl(grouData.value || '', Validators.required) : new FormControl(grouData.value || '');
          })
          group[FormData["groupName"]] = new FormGroup(ngroup);
      }else{
         group[FormData.controlName] = FormData.required ? new FormControl(FormData.value || '', Validators.required) : new FormControl(FormData.value || '');
      }
      
    });
    console.log(group);
    return new FormGroup(group);
  }
}