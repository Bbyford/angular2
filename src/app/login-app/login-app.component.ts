import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import {DataService} from '../core/data.service';

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
  constructor(private myhttp:DataService,private router:Router) { }
  ngOnInit(): void{
      document.title = "登录";
      if(sessionStorage.getItem('user')){
          this.router.navigate(["index/home"]);
      }
      this.user = new User();
  }
  onSubmit(){
      this.value = {};
      this.value['pdata'] = JSON.stringify(this.user);
        let path = JSON.stringify(this.user);
     //  this.path['pdata'] = path;
     // // this.path = JSON.stringify(this.path);
     // var headers = new Headers();
     //     headers.append('Content-Type', 'application/json;charset=UTF-8');
      // console.log(path);
      //console.log(this.path);{'pdata':'{"CZYID":"A0001","CZYMM":"123456"}'}
    // 得在服务端改动 post请求
    /*   this.myhttp.PostData(this.value).subscribe(res => {this.data = res;if(this.data.success===true){
                   sessionStorage.setItem('user',JSON.stringify(this.data));
                  this.router.navigate(["index/home"]);
              }else{alert("用户名或密码错误")}});  */
    // 不用改动服务端 post方式
    this.myhttp.RequestPost(path).subscribe(res => {
            this.data = res;
            console.log(this.data);
            if(this.data.success===true){
                  sessionStorage.setItem('user',JSON.stringify(this.data));
                  this.router.navigate(["index/home"]);
            }else{
                alert("用户名或密码错误")
            }
        }); 
    // 得在服务端改动  post请求
    // this.myhttp.ExecutePost(this.value).subscribe(res => {this.data = res;if(this.data.success===true){
    //               sessionStorage.setItem('user',JSON.stringify(this.data));
    //               this.router.navigate(["index/home"]);
    //           }else{alert("用户名或密码错误")}}); 
      
  }
}