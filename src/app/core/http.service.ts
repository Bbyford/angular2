import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptionsArgs,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RequestData} from './RequestData';
import {ResponseData} from './ResponseData';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class HttpAPI {
  private  API_KEY: string = "your key here";
  private  APP_URL: string ="http://localhost:8080/YYERP";

  /**
   * Creates a new MovieService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
 public  PostData(URL:string,data:RequestData): Observable<ResponseData> {
    console.info("ABCD");
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(data);
    return this.http.post("http://localhost:8080/YYERP/aut/czyAction/doNotNeedSession_login.action", body, { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

 public  GetData(URL:string,data:RequestData): Observable<ResponseData> {
    let queryParameters = new URLSearchParams();
    let headerParams = new Headers({ 'Content-Type': null});
    let requestOptions: RequestOptionsArgs = {
       headers: headerParams,
       search: queryParameters
    };
    let body = JSON.stringify(data);
    queryParameters.set("pdata",body);
    return this.http.get(this.APP_URL+URL, requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }
  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
     let errorMessage = (error.message) ? (error.message) : (error.statusText ? error.statusText : 'Server error');
     console.error(errorMessage);
      return Observable.throw(errorMessage);
  }
}
