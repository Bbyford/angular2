import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  public a:string;
  constructor() {

   }

   setvalue(a:string){
     this.a=a;
   }
  public  getvalue():string{
      return this.a;
   }

}
