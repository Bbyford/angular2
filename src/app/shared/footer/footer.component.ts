import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   user : any;
  constructor() { }

  ngOnInit() {
      let user = sessionStorage.getItem('user');
      user = JSON.parse(user);
      this.user = user;
  }

}
