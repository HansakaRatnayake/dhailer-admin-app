import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductimageService {

  constructor(private Http:HttpClient) { }

  imageurl : string = 'http://localhost:8001/api/v1/product-image';

  upload(image:any,productid:string){
    const formData = new FormData();
    formData.append('productImage',image);
    return this.Http.post(`${this.imageurl}/${productid}`,formData);
  }

}
