import { Component, OnInit } from '@angular/core';
export class User{
  msg: string;
  obj: any;
  succcess: Boolean;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit() {
      let user = sessionStorage.getItem('user');
      let users = JSON.parse(user);
      this.user = users;
  }

}
