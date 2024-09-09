import {Paginate} from "./Paginate";

export interface StandardResponce<T>{
  code:string,
  message:string,
  data:T
}

