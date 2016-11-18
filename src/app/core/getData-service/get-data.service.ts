import { Injectable }    from '@angular/core';
import { Headers, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Data }  from '../../mock-data/data.module';

@Injectable() 

export class GetDataService {
    private headers = new Headers({'Content-Type':'application/json'});
    private dataUrl = 'app/data';
    constructor(private http:Http){ }
    getDate(): Promise<Data[]>{
        return this.http.get(this.dataUrl)
                    .toPromise()
                    .then(response => response.json().data as Data[])
    }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
    
}