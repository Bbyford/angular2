import { Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'index-app',
  templateUrl: './index-app.html',
  styleUrls: ['./index-app.css']
})
export class IndexAppComponent implements OnInit {
  constructor(private router:Router) { }
   ngOnInit(): void{
      document.title = "首页";
      if(!sessionStorage.getItem('user')){
          this.router.navigate(["index/home"]);
      }
  }
}