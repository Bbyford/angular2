import { Component, Input , OnChanges,SimpleChanges} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FormDataBase } from '../../core';
@Component({
  selector: 'form-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css']
})
export class FormBaseComponent implements OnChanges{
  @Input() field: FormDataBase<any>;
  @Input() readyOnly: boolean;
  @Input() form: FormGroup;
  model: any;
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
}