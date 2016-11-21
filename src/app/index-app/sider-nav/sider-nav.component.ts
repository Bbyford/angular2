import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Data }    from '../../mock-data/data.module';
import { Tabs }  from './tabs';
import { GetDataService  }  from '../../core/getData-service/get-data.service';

@Component({
  moduleId: "module.id",
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})
export class SiderNavComponent implements OnInit {
  data: Data[];
  selectData: Data;
  tabs: any[] = [];
  dataYY: any[];
  constructor(
      private getDataService : GetDataService,
      private router : Router
    ) { }
  getData(): void {
      this.getDataService
          .getDate()
          .then(data => this.data = data);
      console.log(this);
  }
  getDataYY():void{
    this.getDataService
          .getDateYYERP()
          .subscribe(res => this.dataYY = res);
      console.log(this.dataYY);
  }
  ngOnInit(): void{
      this.getData();
      if(sessionStorage.getItem('tabs')){
        this.tabs = JSON.parse(sessionStorage.getItem('tabs'));
      }
  }
  onSelect(datas: Data): void {
      if(this.selectData===datas){
        this.selectData = {
          lebel: '',
          icon: '',
          show: false,
          items: false
        }
      }else{
        this.selectData = datas;
      }   
  }
  addTab(one:string,two:string){
     let tabs = new Tabs();
     tabs.one = one;
     tabs.two = two;
     let num = 0;
     if(this.tabs.length==0){
         this.tabs.push(tabs);
         sessionStorage.setItem('tabs',JSON.stringify(this.tabs));
         return;
     }
     for (let i = 0; i < this.tabs.length;i++){
        if(this.tabs[i].two===two){
          num = 1;
        }
     }
     if(num == 0){
        this.tabs.push(tabs);
        sessionStorage.setItem('tabs',JSON.stringify(this.tabs));
     }
     console.log(tabs);
  }

}
