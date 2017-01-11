import { Injectable } from '@angular/core';

@Injectable()
export class DataConfigService {
  public data: any = {};
  public flag: any = {};
  constructor() { }
  getCDNMData(CDNM:string){
    debugger;
    if(this.data[CDNM] != undefined){
       return this.data[CDNM];
    }else{
      this.flag[CDNM] = 0;
    }
  }
  setCDNMData(CDNM:string,data:any){
    debugger;
    if(!this.flag[CDNM]){
        this.data[CDNM] = data;
    }    
  };
  deleteCDNMData(CDNM:string){
    debugger;
     delete this.data[CDNM];
     this.flag[CDNM] = 1;
  }
}
