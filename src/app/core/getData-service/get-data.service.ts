import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions}    from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Data }  from '../../mock-data/data.module';

@Injectable() 

export class GetDataService {
    private headers = new Headers({'Content-Type':'application/json'});
    private dataUrl = 'app/data';
    private dataUrlYYERP='http://localhost:8080/YYERP/base/funcAction/query.action'
    constructor(private http:Http){ }
    getDate(): Promise<Data[]>{
        return this.http.get(this.dataUrl)
                    .toPromise()
                    .then(response => response.json().data as Data[])
    }
    getDateYYERP(): Observable<any[]>{
        let body = JSON.stringify({page:1,limit:10,mdrender:false});
        return this.http.get("https://cnodejs.org/api/v1/topics")
                    .map(res => res.json())
                    .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
    
}