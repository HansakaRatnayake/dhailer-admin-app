import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../../../services/product/product.service";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    ReactiveFormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  readonly dialogref = inject(MatDialogRef<NewProductComponent>);
  readonly productservice = inject(ProductService);

  form = new FormGroup({
    qty:new FormControl('',[Validators.required]),
    unitprice:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
    }

  )


  create(){
    // console.log("Huththo");
    let obj = {
      qty : this.form.value.qty,
      unitprice : this.form.value.unitprice,
      description : this.form.value.description,
    }
    this.productservice.create(obj).subscribe(res=>{
      this.dialogref.close(true);
    },
    err=>{
      console.log(err?.error?.message);
    })
  }

  close(){
    this.dialogref.close(false);
  }

}
