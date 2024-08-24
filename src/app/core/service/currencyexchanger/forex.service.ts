import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  key:string = 'cf8ba85488-3609ce0c6f-shnm8d';

  constructor(private http : HttpClient) { }

  exchange(from:string,to:string):Observable<any>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    return this.http.get(`https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=${this.key}`,options);
  }

}
