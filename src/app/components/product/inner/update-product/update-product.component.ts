import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../../../core/service/product/product.service";
import {SnackbarService} from "../../../../core/service/snackbar/snackbar.service";

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit{

  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly productservice = inject(ProductService);
  readonly dialogRef = inject(MatDialogRef<UpdateProductComponent>);
  readonly snackbarservice = inject(SnackbarService);
  form = new FormGroup({
    description:new FormControl('',Validators.required),
    qty:new FormControl('',Validators.required),
    unitprice:new FormControl('',Validators.required),
  })

  ngOnInit(): void {

    this.form.patchValue({
      qty : this.data.qty,
      description : this.data.description,
      unitprice : this.data.unitprice
    })

  }

  update(){

    const obj = {
      qty : this.form.value.qty,
      unitprice : this.form.value.unitprice,
      description : this.form.value.description,
    }
    this.productservice.update(this.data.propertyId,obj).subscribe(res => {
      this.dialogRef.close(true);
      this.snackbarservice.getSnackBar('Product successfully updated','Close');

    },error => {
      console.error(error);
      this.snackbarservice.getSnackBar('Update error.Try again','Close');
    })
  }





}
