import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SnackbarService} from "../../../../core/service/snackbar/snackbar.service";
import {ProductimageService} from "../../../../core/service/product-image/productimage.service";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-manage-product-image',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './manage-product-image.component.html',
  styleUrl: './manage-product-image.component.scss'
})
export class ManageProductImageComponent implements OnInit{

  readonly snackbarservice = inject(SnackbarService);
  readonly productimageservice = inject(ProductimageService);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly cdr = inject(ChangeDetectorRef)

  imageURL:string | null =null;
  activePreview : boolean = false;
  isHaveImages : boolean = false;
  activeProceed : boolean = false;

  form = new FormGroup({
    image:new FormControl('',[Validators.required])
  })

  image:any;

  onFileSelected(event:Event){

    const fileinput = event.target as HTMLInputElement;
    this.image = fileinput.files?.[0];

    if (this.image){
      if (this.isFileSizeValid(this.image)){
        const allowedfileextentions = ['jpg','png','jpeg','pdf','webp'];
        let fileextention = this.image.name.split('.').pop().toLowerCase();

        if (allowedfileextentions.includes(fileextention)){
            this.previewImage(this.image);
            this.activePreview = !this.activePreview;
            this.activeProceed = true
        }else {
          this.imageURL = null;
          this.imageURL = null;
          fileinput.value = '';
          this.snackbarservice.getSnackBar('Image type not supported','Close');

        }
      }
    }else {
      this.imageURL = null;
      this.imageURL = null;
      fileinput.value = '';
      this.snackbarservice.getSnackBar('Image not selected','Close');
    }
  }

  isFileSizeValid(file:File):boolean{
    const maxsize= 5 * 1024 * 1024;
    return file.size <= maxsize;
  }

  previewImage(file:any){
    const reader = new FileReader();
    reader.onload = () =>{
       this.imageURL= reader.result as  string;
    }

    reader.readAsDataURL(file);
  }

  uploadImage(input:any){
    this.productimageservice.upload(this.image,this.data.propertyId).subscribe(response=>{
      console.log(response);
      const obj = {resourceurl : this.imageURL}
      this.data.productImages.push(obj);
      this.isHaveImages = true;
      this.activeProceed = false;
      this.cdr.detectChanges()
      this.snackbarservice.getSnackBar('Image uploaded successfully','Close');
      this.imageURL = null;
      this.image = null;
      this.activePreview = !this.activePreview;
      input.value = '';

    },error => {
      console.log(error);
      this.snackbarservice.getSnackBar('Upload error.Try again','Close');
    })
  }

  ngOnInit(): void {
    if (this.data.productImages[0]){
      this.isHaveImages = true;
    }
  }



}
