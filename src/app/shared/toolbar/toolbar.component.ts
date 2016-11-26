import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    toggle: Boolean = true;
    show: Boolean;
    constructor() { }

    ngOnInit() {
        this.show = true;
     }
    add():void{
        this.toggle = false;
    }
    save():void{
        this.toggle = true;
    }
    cancel():void{
        this.toggle = true;
    }

}