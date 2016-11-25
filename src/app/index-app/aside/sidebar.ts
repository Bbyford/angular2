import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.html'
})

export class SidebarComponent implements OnInit {

  userMsg: any;
  isActive = false;
  showMenu: string = '';
  menus: any[] = [];
  showItem: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    // if (this.loginService.userMsg) {
    //   this.userMsg = this.loginService.userMsg;
    // } else {
    //   this.userMsg = JSON.parse(localStorage.getItem('userInfo'));
    // }

    //从缓存中读出tab的列表，根据url判断选中的tab
    if (localStorage.getItem('tabs')) {
      var url = window.location.pathname;
      this.menus = JSON.parse(localStorage.getItem('tabs'));
      for (var i in this.menus) {
        if (this.menus[i].url === url.substring(url.indexOf('dashboard/') + 10, url.length)) {
          this.showItem = this.menus[i].id;
        }
      }
    }

  }


  eventCalled() {
    this.isActive = !this.isActive;
  }

  //展开菜单
  addExpandClass(element: any) {

    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  //点击菜单跳转到对应tab
  routerTo(menuId: string, element: string, url: string) {
    this.showItem = menuId;
    this.addTab(menuId, element, url);
    this.router.navigate(['dashboard/' + url]);
  }

  //tab之间跳转
  tabTo(menuId: string, element: any, url: string) {
    this.showItem = menuId;
    this.router.navigate(['dashboard/' + url]);
  }

  //关闭tab
  closeTab(menuId: string) {
    event.stopPropagation();
    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].id === menuId && this.menus.length > 1) {
        //如果是当前选中的菜单
        if (menuId === this.showItem) {
          if (this.menus[i - 1]) {
            this.router.navigate(['dashboard/' + this.menus[i - 1].url]);
            this.showItem = this.menus[i - 1].id;
          }
          if (this.menus[i + 1]) {
            this.router.navigate(['dashboard/' + this.menus[i + 1].url]);
            this.showItem = this.menus[i + 1].id;
          }
        }

        this.menus.splice(i, 1);
        localStorage.setItem('tabs', JSON.stringify(this.menus));
      }
    }
  }

  //添加tab
  addTab(menuId: string, element: string, url: string) {
    let menu :any;
    menu.id = menuId;
    menu.name = element;
    menu.url = url;
    let ss = 0;
    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].id === menuId) {
        ss = 1;
      }
    }
    if (ss === 0) {
      this.menus.push(menu);
      localStorage.setItem('tabs', JSON.stringify(this.menus));
    }

  }

}

