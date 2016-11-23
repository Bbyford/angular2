import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router }  from '@angular/router';
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
  constructor(private http:Http,private router:Router) { }
  ngOnInit(): void{
      document.title = "登录";
      if(sessionStorage.getItem('user')){
          this.router.navigate(["index/home"]);
      }
  }
  onSubmit(user:User){
      console.log(user);
      this.http.post(this.url,user,this.headers)
              .map(res => res.json())
              .subscribe(res => {this.data = res;if(this.data.success===true){
                  sessionStorage.setItem('user',JSON.stringify(this.data));
                  this.router.navigate(["index/home"]);
              }else{alert("用户名或密码错误")}});
  }
}