import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar : MatSnackBar) { }

  getSnackBar(message:string,action:string):MatSnackBarRef<any>{
    return this.snackbar.open(message,action,{
      duration:3000,
      verticalPosition:"bottom",
      horizontalPosition:"left",
      direction:"ltr"
    })
  }

}
