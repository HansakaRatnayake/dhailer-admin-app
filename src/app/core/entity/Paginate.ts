import {Product} from "./Product";

export interface Paginate<D>{
  datalist:Array<D>,
  count:number
}
