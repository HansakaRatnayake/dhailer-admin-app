import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "node:http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  baseurl : string = 'http://localhost:8001/api/v1/products';


  create(obj:any):Observable<any>{
    return this.http.post(this.baseurl,{
      qty:obj.qty,
      unitprice:obj.unitprice,
      description:obj.description,
    })
  }

  search(searchtext:any, page:number, size:number):Observable<any>{
    let params  = new HttpParams();
    params = params.append('searchtext',searchtext);
    params = params.append('page',page);
    params = params.append('size',size);

    return this.http.get(`${this.baseurl}/list`,{params:params});
  }

  update(id:string,product:any) : Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`,{
      qty:product.qty,
      unitprice:product.unitprice,
      description:product.description
    })
  }
}
