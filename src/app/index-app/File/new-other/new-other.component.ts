import  { Component } from '@angular/core';

@Component({
    selector: 'new-other',
    templateUrl: './new-other.html'
})

export class NewOtherComponent {
    model = {

    };
    cars: any;
    cancelData: any;
    searchData = {
        data: {
            page: 1,
            rows: 20,
            sort: 'GSMC',
            order: 'desc',
            F_CZYID: 'A0013',
            pdata: {
                F_CZQX: "SFID",
                qrylx: "MAS_GSXX",
                F_BDJS: "000101",
                F_BDQXID: "000101"
            }
        },
        http: "http://localhost:8080/YYERP/base/funcAction/query.action"
    }
    cancelDataEvent(event):void{
        this.cancelData = event;
    }
}
