import { Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';
import { BlockUIService } from '../core';
import 'rxjs/Rx';

@Component({
  selector: 'index-app',
  templateUrl: './index-app.html',
  styleUrls: ['./index-app.css'],
  providers: [BlockUIService]
})
export class IndexAppComponent implements OnInit {
  public blockUI: Boolean;
  constructor(
    private router:Router,
    private blockUIService: BlockUIService,
    ) {

  }
  ngOnInit(): void{
      this.blockUIService.blockUIEvent.subscribe(event => this.blockUnBlockUI(event));
      this.blockUIService.blockUIEvent.emit({
        value: false
      });
      document.title = "首页";
      if(!sessionStorage.getItem('user')){
          this.router.navigate(["login"]);
      }
  }
  private blockUnBlockUI(event) {
      this.blockUI = event.value;
  }
}