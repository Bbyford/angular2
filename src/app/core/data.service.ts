import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, RequestOptionsArgs, RequestOptions, Request ,RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Data } from './data.module';
import { FormDataBase } from './formdata-base';
import { SearchGridConf } from './searchGridConf';

@Injectable()

export class DataService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dataUrl = 'app/data';
    private dataUrlYYERP = 'http://localhost:8080/YYERP/';
    constructor(private http: Http) { }
    //请求本地json数据方式
    getDate(url: string): Observable<Data[]> {
        return this.http.get(url)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    //获取动态表单数据
    getFormData(url: string): Observable<FormDataBase<any>[]> {
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }
    //获取查询表格
    getGridPZData(url: string): Observable<SearchGridConf<any>> {
        debugger;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //得改动服务端  post请求
    PostData(data: any): Observable<any> {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post("http://localhost:8080/YYERP/aut/czyAction/mylogin.action", data, { headers: headers })
            .map(res => res.json())
            .catch(this.handleError);
    }
    //不用改动服务端  get请求带参数形式
    public GetData(URL: string, data: any): Observable<any> {
        let queryParameters = new URLSearchParams();
        let headerParams = new Headers({ 'Content-Type': null });
        let requestOptions: RequestOptionsArgs = {
            headers: headerParams,
            search: queryParameters
        };
        let body = JSON.stringify(data);
        queryParameters.set("pdata", body);
        return this.http.get(this.dataUrlYYERP + URL, requestOptions)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError(error: any): Observable<any> {
        let errorMessage = (error.message) ? (error.message) : (error.statusText ? error.statusText : 'Server error');
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
    //不用改动服务端  post请求
    public RequestPost(data: any,  url: string): Observable<any> {
        let queryParameters = new URLSearchParams();
        let headerParams = new Headers();


        let formParams = new URLSearchParams();
        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');
        for(var key in data){
            formParams.append(key, JSON.stringify(data[key]));
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();
        return this.http.request(this.dataUrlYYERP + url, requestOptions)
            .map((response: Response) => {
                if (response.status === 401 || response.status === 403) { window.location.href = '/#/login'; return response.json(); } else if (response.status === 204) {
                    return response.json();
                } else {
                    if (response.json().meta && response.json().meta.code === 401) { window.location.href = '/#/login'; return response.json(); } return response.json();
                }
            }).catch(this.handleError);
    }

    //得在服务端修改 加上@RequestBody
    public ExecutePost(data:any) {
        let _body = JSON.stringify(data);
        let headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=utf-8');

        let requestoptions: RequestOptions = new RequestOptions({
            method: RequestMethod.Post,
            url: "http://localhost:8080/YYERP/aut/czyAction/mylogin.action",
            headers: headers,
            body: _body
        })

        return this.http.request(new Request(requestoptions))
            .map((res: Response) => { return res.json(); });
    }

}