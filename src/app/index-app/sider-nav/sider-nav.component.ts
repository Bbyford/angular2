import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Data }    from '../../core';
import { Tabs }  from './tabs';
import { DataService  }  from '../../core';
import { DataConfigService } from '../../core/data-config.service';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})
export class SiderNavComponent implements OnInit {
  data: Data[];
  selectData: Data;
  tabs: any[] = [];
  menuData: any;
  active: string;
  url = "../../mock-data/data.json";
  constructor(
      private getDataService : DataService,
      private router : Router,
      private dataConfigService:DataConfigService
    ) { }
  getData(): void {
      this.getDataService
          .getDate(this.url)
          .subscribe(res => this.data = res);
  }
  getMenuData():void{
    //console.log(this.dataYY)
    this.getDataService
          .GetData('aut/czyAction/getmenu.action',{CZYID:"A0001",BDJSID:"000101",TYJSID:"0001",BDQXID:"000101",F_BDQXID:"000101"})
          .subscribe(res => {this.menuData = res;console.log(res)});
         // console.log(this.dataYY);
  }
  ngOnInit(): void{
      this.getData();
      this.tabs = [{one:'index',two:'home'}];
      if(sessionStorage.getItem('tabs')){
        this.tabs = JSON.parse(sessionStorage.getItem('tabs'));
      }
      let url = window.location.pathname;
      let pos = url.lastIndexOf('/');
      this.active = url.slice(pos+1);
  }
  onSelect(datas: Data): void {
      if(this.selectData===datas){
        this.selectData = null;
      }else{
        this.selectData = datas;
      }   
  }
  addTab(one:string,two:string,$event:any){
     let tabs = new Tabs();
     tabs.one = one;
     tabs.two = two;
     let num = 0;
     // if(this.tabs.length==0){
     //     this.tabs.push(tabs);
     //     sessionStorage.setItem('tabs',JSON.stringify(this.tabs));
     //     return;
     // }
     for (let i = 0; i < this.tabs.length;i++){
        if(this.tabs[i].two===two){
          num = 1;
        }
     }
     if(num == 0){
        if(this.tabs.length==6){
           alert("最多只能打开6个页面");
           return false;
        }
        this.tabs.push(tabs);
        sessionStorage.setItem('tabs',JSON.stringify(this.tabs));
     }
     this.tabTo(one,two);
     this.active = two;
  }
  tabTo(one:string,two:string){
    debugger;
      this.active = two;
      if(two === "home"){
        this.router.navigate([one+'/'+two]);
      }else{
        this.router.navigate(['index/'+one+'/'+two]);
      }     
  }
  change(){
    this.active = "home";
  }
  closeTab(two:string){
    debugger;
     // event.stopPropagation();
      let len = this.tabs.length;
      for(let i = 0; i < len; i++){
        if(this.tabs.length < len){
            return false;
        }
        if(this.tabs[i].two === two&&this.tabs.length>1){
          if(two === this.active){
            if(this.tabs.length ===2){
                this.router.navigate([this.tabs[i - 1].one + '/'+ this.tabs[i - 1].two]);
                this.active = this.tabs[i - 1].two; 
            }else{
              
              if(this.tabs[i+1]){
                console.info(this.tabs[i + 1].two);
                this.router.navigate(['index/'+this.tabs[i + 1].one + '/'+ this.tabs[i + 1].two]);
                this.active = this.tabs[i+1].two;
                console.info(this.active);
              }else{
                if(this.tabs[i-1]){
                  this.router.navigate(['index/' + this.tabs[i - 1].one + '/'+ this.tabs[i - 1].two]);
                  this.active = this.tabs[i - 1].two;
                  console.info(this.active);
                }
              }
            }
            
          }
          this.tabs.splice(i,1);
          sessionStorage.setItem('tabs',JSON.stringify(this.tabs));
        }
      }
      this.dataConfigService.deleteCDNMData("defGSXX");
  }


}
