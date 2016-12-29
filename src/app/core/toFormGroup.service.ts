import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormDataBase } from './formdata-base';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(FormDatas: FormDataBase<any>[] ) {
    let group: any = {};

    FormDatas.forEach(FormData => {
      group[FormData.controlName] = FormData.required ? new FormControl(FormData.value || '', Validators.required) : new FormControl(FormData.value || '');
    });
    return new FormGroup(group);
  }
}