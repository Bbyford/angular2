import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-grid',
  templateUrl: 'searchGrid.component.html',
  styleUrls: ['searchGrid.component.css']
})
export class searchGridComponent implements OnInit {
  @Input() gridDataConf: any;
  @Input() gridSearchData: any;
  @Input() selected: any;
  @Output() selectedData : EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
  }

  onRowSelect(event) {
    //this.selected表示当前点击的数据
      console.log(this.selected);
    //event.data也表示当前点击的数据
      this.selectedData.emit(this.selected);
  }
  onRowUnselect(event) {

  }
}