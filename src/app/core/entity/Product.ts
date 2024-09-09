import {ProductImage} from "./ProductImage";
import {SafeHtml} from "@angular/platform-browser";

export interface Product{
  propertyId : string,
  code : string,
  qty:number,
  unitPrice:number,
  description:string,
  sales:number,
  salePrice:number,
  discountPrice:number,
  revenue:number,
  productCategory:string,
  supplier:string,
  productImages:Array<ProductImage>

}
