import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'form-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css']
})
export class FormBaseComponent {
  @Input() field;
  @Input() form: FormGroup;
  model: any;
}