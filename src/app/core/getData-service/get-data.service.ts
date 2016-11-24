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
    getDateYYERP(): Observable<any>{
        let body = JSON.stringify({});
        return this.http.get('http://localhost:8080/YYERP/base/funcAction/query.action?pdata:{"GSID":"1001","F_CZQX":"CGZZID","DJLXID":"CD0","page":1,"totle":0,"qrylx":"PUR_CGDD","F_BDJS":"000101","F_BDQXID":"000101"}')
                    .map(res => res.json())
                    .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
    PostData(data:any): Observable<any> {
    console.info("ABCD");
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8080/YYERP/aut/czyAction/mylogin.action", data, { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
      }

    
}