import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-grid',
  templateUrl: 'searchGrid.component.html',
  styleUrls: ['searchGrid.component.css']
})
export class searchGridComponent implements OnInit {
  @Input() gridDataConf: any;
  @Input() gridSearchData: any;
  @Output() selectedData : EventEmitter<any> = new EventEmitter<any>();
  public selected: any;
  ngOnInit() {
  }

  onRowSelect(event) {
      this.selectedData.emit(event.data);
  }
  onRowUnselect(event) {

  }
}