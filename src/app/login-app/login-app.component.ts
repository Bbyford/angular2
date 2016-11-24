import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router }  from '@angular/router';
import {HttpAPI} from '../core/http.service';
import {RequestData} from '../core/RequestData';
//import {RequestData} from '../core/RequestData';
export class User {
    CZYID: string;
    CZYMM: string;
}
@Component({
  selector: 'login-app',
  templateUrl: './login-app.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit{
  private headers = new Headers({'Content-Type':'application/json'});
  private url='http://localhost:8080/YYERP/aut/czyAction/doNotNeedSession_login.action'
  user: User={
      CZYID: '',
      CZYMM: ''
  };
  data: any;
  path = {};
  abc:RequestData;
      
  constructor(private http:Http,private router:Router,private myHttp:HttpAPI) { }
  ngOnInit(): void{
      document.title = "登录";
      if(sessionStorage.getItem('user')){
          this.router.navigate(["index/home"]);
      }
  }
  onSubmit(user:User){
     //   let path = JSON.stringify(user);
     //  this.path['pdata'] = path;
     // // this.path = JSON.stringify(this.path);
      console.log(user);
      // console.log(path);
      //console.log(this.path);
      this.abc.pdata=user;
      this.abc.czlx="sfjks";
      // this.http.post(this.url,{'pdata':'{"CZYID":"A0001","CZYMM":"123456"}'},this.headers)
      //         .map(res => res.json())
      //         .subscribe(res => {this.data = res;if(this.data.success=true){
      //             sessionStorage.setItem('user',JSON.stringify(this.data));
      //             this.router.navigate(["index/home"]);
      //         }else{alert("用户名或密码错误")}});
      
      this.myHttp.PostData(this.url,this.abc).subscribe(res => {this.data = res.obj;if(this.data.success=true){
                  sessionStorage.setItem('user',JSON.stringify(this.data));
                  this.router.navigate(["index/home"]);
              }else{alert("用户名或密码错误")}});
  }
}