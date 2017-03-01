import { Component, Input , OnChanges,SimpleChanges, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FormDataBase } from '../../core';
@Component({
  selector: 'form-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css']
})
export class FormBaseComponent implements OnChanges{
  constructor(private hostRef: ElementRef) {
  }
  @Input() field: FormDataBase<any>;
  @Input() readyOnly: boolean;
  @Input() form: FormGroup;
  model: any;
  targetCurrent: boolean = false;
  value: any;
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
  emptyInput():void{
     debugger;
     this.value = '';
  }
  onFocus(event: any): void{
    debugger;
    this.targetCurrent = true;
  }
  onBlur(event: any): void{
    console.log(this.targetCurrent);
  }

  // 监听全局的点击事件，如果不是当前 input-control 组，则视为失去焦点操作
 @HostListener('window:click', ['$event'])
  inputControlBlurHandler(event) {
    var parent = event.target;
    // 如何当前节点不是宿主节点，并且不等于 document 节点
    while (parent && parent != this.hostRef.nativeElement && parent != document) {
      // 取当前节点的父节点继续寻找
      parent = parent.parentNode;
    }

    // 找到最顶层，则表示已经不在宿主元素内部了，触发失去焦点 fn
    if (parent == document) {
       this.targetCurrent = false;
    }
  }
}