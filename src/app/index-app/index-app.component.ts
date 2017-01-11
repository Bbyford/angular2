import { Component, OnInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnChanges} from '@angular/core';
import { Router }  from '@angular/router';
import { BlockUIService } from '../core';
import 'rxjs/Rx';

@Component({
  selector: 'index-app',
  templateUrl: './index-app.html',
  styleUrls: ['./index-app.css'],
  providers: [BlockUIService]
})
export class IndexAppComponent implements OnInit , AfterContentChecked, AfterViewChecked, AfterViewInit, OnChanges{

  public blockUI: Boolean = true;
  constructor(
    private router:Router,
    private blockUIService: BlockUIService,
    ) {

  }
  ngOnInit(): void{  
      this.blockUIService.blockUIEvent.subscribe(event => this.blockUnBlockUI(event));
      this.blockUIService.stopBlock();
      document.title = "首页";
      // if(!sessionStorage.getItem('user')){
      //     this.router.navigate(["login"]);
      // }
  }
  ngAfterContentChecked(){

  }
  ngAfterViewChecked() { 

  }
  ngAfterViewInit() {

  }
  ngOnChanges(changeRecord) { 
  }
  private blockUnBlockUI(event) {
      this.blockUI = event;
  }
}