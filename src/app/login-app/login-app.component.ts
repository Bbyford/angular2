import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import {GetDataService} from '../core/getData-service/get-data.service';

export class User {
    CZYID: string;
    CZYMM: string;
    pdata:any;
    userId?:string;
}
@Component({
  selector: 'login-app',
  templateUrl: './login-app.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit{
  // private headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
  private url='http://localhost:8080/YYERP/aut/czyAction/doNotNeedSession_login.action'
  data: any;
  value: any;
  user: User;
  constructor(private myhttp:GetDataService,private router:Router) { }
  ngOnInit(): void{
      document.title = "登录";
      if(sessionStorage.getItem('user')){
          this.router.navigate(["index/home"]);
      }
      this.user = new User();
  }
  onSubmit(){
      this.value = this.user;
      this.value['pdata'] = JSON.stringify(this.user);
      this.value["userid"]="ABCD";
     //   let path = JSON.stringify(user);
     //  this.path['pdata'] = path;
     // // this.path = JSON.stringify(this.path);
     // var headers = new Headers();
     //     headers.append('Content-Type', 'application/json;charset=UTF-8');
      // console.log(path);
      //console.log(this.path);{'pdata':'{"CZYID":"A0001","CZYMM":"123456"}'}

      this.myhttp.PostData(this.value).subscribe(res => {this.data = res;if(this.data.success=true){
                  sessionStorage.setItem('user',JSON.stringify(this.data));
                  this.router.navigate(["index/home"]);
              }else{alert("用户名或密码错误")}});
      
  }
}