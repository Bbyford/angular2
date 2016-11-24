import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions}    from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Data }  from '../mock-data/data.module';

@Injectable() 

export class DataService {
    private headers = new Headers({'Content-Type':'application/json'});
    private dataUrl = 'app/data';
    private dataUrlYYERP='http://localhost:8080/YYERP/';
    constructor(private http:Http){ }
    getDate(): Promise<Data[]>{
        return this.http.get(this.dataUrl)
                    .toPromise()
                    .then(response => response.json().data as Data[])
    }
    getDateYYERP(path:string,params:any): Observable<any>{
        let url = this.dataUrlYYERP + path + '?' + JSON.stringify(params);
        return this.http.get(url)
                    .map(res => res.json())
                    .catch(this.handleError);
    }
    PostData(data:any): Observable<any> {
    console.info("ABCD");
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8080/YYERP/aut/czyAction/mylogin.action", data, { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
    
}