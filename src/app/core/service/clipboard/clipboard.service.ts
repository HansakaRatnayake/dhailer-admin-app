import { Injectable } from '@angular/core';
import {SnackbarService} from "../snackbar/snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private snackbarservice : SnackbarService) { }

  coppy(text: string) {

    if (navigator.clipboard){
      navigator.clipboard.writeText(text).then(() => {
        this.snackbarservice.getSnackBar('Coppied to clipboard','Close')
      }).catch(error => {
        this.snackbarservice.getSnackBar('Error..Try again','Close')
      })
    }else {
      this.snackbarservice.getSnackBar('Browser not support clipboard','Close');
    }
  }
}
