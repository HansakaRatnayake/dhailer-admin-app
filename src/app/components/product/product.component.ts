import {Component, OnInit} from '@angular/core';
import {CustomerActivestatusComponent} from "../customer/inner/customer-activestatus/customer-activestatus.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NewProductComponent} from "./inner/new-product/new-product.component";
import {UpdateProductComponent} from "./inner/update-product/update-product.component";
import {MatTooltip} from "@angular/material/tooltip";
import {ManageProductImageComponent} from "./inner/manage-product-image/manage-product-image.component";
import {ProductService} from "../../core/service/product/product.service";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, of} from "rxjs";
import {ClipboardService} from "../../core/service/clipboard/clipboard.service";
import {ForexService} from "../../core/service/currencyexchanger/forex.service";
import {HeaderComponent} from "../../shared/header/header.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatInputModule} from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {DomSanitizer} from "@angular/platform-browser";
import {Product} from "../../core/entity/Product";
import {StandardResponce} from "../../core/entity/StandardResponce";
import {Paginate} from "../../core/entity/Paginate";
import {ProductImage} from "../../core/entity/ProductImage";
import {CommandModule} from "@angular/cli/src/command-builder/command-module";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CustomerActivestatusComponent,
    MatIcon,
    MatIconButton,
    MatTooltip,
    NgForOf,
    ReactiveFormsModule,
    CurrencyPipe,
    HeaderComponent,
    MatTab,
    MatTabGroup,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatInputModule,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatCardActions,
    MatFabButton,
    NgIf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  currencyrate : number = 0;
  productarray:Product[] =[] ;
  searchtext = '';
  page:number = 0;
  size : number = 10;
  searchform:FormGroup = new FormGroup({
    text : new FormControl('')
  });
  constructor(private dialog:MatDialog,
              private productservice:ProductService,
              private clipboardservice : ClipboardService,
              private currencyEx : ForexService,
              private sanitizer:DomSanitizer) {
  }

  ngOnInit(): void {

    // this.currencyEx.exchange('USD','LKR').subscribe(res=>{
    //   this.currencyrate = res.result.LKR;
    // },error => {
    //   this.currencyrate = 0;
    //   console.log(error);
    // })

    this.loadAllProducts();

    this.searchform.valueChanges.pipe(debounceTime(500)).subscribe(data=>{
      this.searchtext = data.text;
      this.loadAllProducts();
    })
  }


  openNewProductDialogBox(){
    let matDialogRef = this.dialog.open(NewProductComponent,{
      disableClose:true,
      width:'500px'
    })

    matDialogRef.afterClosed().subscribe((response)=>{
      if (response){
        this.loadAllProducts();
      }
    })
  }

  openUpdateProductDialogBox(product:any){
    let matDialogRef = this.dialog.open(UpdateProductComponent,{
      disableClose:true,
      width:'500px',
      data:product
    })

    matDialogRef.afterClosed().subscribe((response)=>{
      console.log(response);
      if (response){
        this.loadAllProducts();
      }
    })
  }

  openManageProductImagesDialogBox(product:any) {
    let matDialogRef = this.dialog.open(ManageProductImageComponent, {
      disableClose: true,
      width: '500px',
      data:product
    })
  }



imageData:any;

  private loadAllProducts() {
    this.productservice.search(this.searchtext,this.page,this.size).subscribe({

      next: res => {
        this.productarray = res.data.datalist;
        //
        // this.imageUrl = this.productarray[0].productImages[0].resourceUrl;
        // console.log(this.productarray);


        // const tempArray  = this.productarray.map(product=>{
        //   const imageArray = product.productImages.map(img =>{
        //     img.image = this.sanitizer.bypassSecurityTrustHtml(`data:image/jpeg;base64,${img.image}`);
        //     this.imageUrl =img.image;
        //     return img;
        //     }
        //   );
        //   product.productImages = imageArray;
        //   return product;
        // })
        // this.productarray = tempArray;
        // // this.imageUrl = this.imageUrl[1];
        // console.log(this.imageUrl)
        // console.log(this.productarray)

        // this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${this.productarray[0].productImages[0].image}`);
        // console.log(pagintation.datalist[0].productImages[0].image);



      }


    })
    // this.productservice.search(this.searchtext,this.page,this.size).subscribe( {
    //
    //   next:res=> this.productarray = res.res.datalist
    //
    //
    //   // console.log(this.productarray.productImages.image);
    //
    //   this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${response.data.datalist.productImages.image}`);
    // },error => {
    //   console.error(error);
    // })
  }

  urlToImage(url:any) {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${url}`);
  }

  copyText(text:string){
    this.clipboardservice.coppy(text);
  }

  convertToBlob(imageData:string){
    // console.log(imageData);
    const binaryString =  atob(imageData.substring(23));
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const view = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryString.length; i++) {
      view[i] = binaryString.charCodeAt(i);
    }

    return new Blob([arrayBuffer],{type:'image/jpeg'});
  }

  loadImage(imageArray:ProductImage[]){
    // console.log(imageArray)


    if (imageArray.length != 0)  return this.urlToImage(imageArray[0].image);

    return '/assets/images/product/5683371_2929936.jpg';
  }


}


