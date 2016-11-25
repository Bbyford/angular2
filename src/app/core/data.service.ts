import { Injectable }    from '@angular/core';
import { Headers, Http, Response}    from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Data }  from './data.module';

@Injectable() 

export class DataService {
    private headers = new Headers({'Content-Type':'application/json'});
    private dataUrl = 'app/data';
    private dataUrlYYERP='http://localhost:8080/YYERP/';
    constructor(private http:Http){ }
    getDate(url:string):Observable<Data[]>{
        return this.http.get(url)
                    .map(res => res.json().data)
                    .catch(this.handleError);
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
    private handleError(error: any): Observable<any>{
        let errorMessage = (error.message) ? (error.message) : (error.statusText ? error.statusText : 'Server error');
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
    
}