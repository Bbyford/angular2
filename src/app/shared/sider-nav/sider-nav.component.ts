import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Data }    from '../../mock-data/data.module';
import { GetDataService  }  from '../../core/getData-service/get-data.service';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})
export class SiderNavComponent implements OnInit {
  data: Data[];
  selectData: Data;
  constructor(
      private getDataService : GetDataService,
      private router : Router
    ) { }
  getData(): void {
      this.getDataService
          .getDate()
          .then(data => this.data = data);
      console.log(this);
  }
  ngOnInit(): void{
      this.getData();
      console.log(this);
  }
  onSelect(show: boolean): void {
      console.log(show);
      show = !show;
      console.log(show)
  }

}
