import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataServiceService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('http://localhost/Angular/api/values')
    .map(
      (response:Response) => {
         const data = response.json();
         return data;
      }
    );
    
  }
}
