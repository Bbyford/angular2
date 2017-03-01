import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'my-dialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MyDialogComponent{
   idisplay: boolean;
   @Output() visibleChange:EventEmitter<any> = new EventEmitter();
   @Input() gridDataConf:any;
   @Input() gridSearchData: any;
   @Input() 
   get display(): boolean {
        return this.idisplay;
   }

   set display(val:boolean) {
        this.idisplay = val;
   }
   
  //  @Output() dialogSelectedData : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  change(event: any){
      this.visibleChange.emit(false);
  }
  selectedGirdEvent(){
    
  }

}