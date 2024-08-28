import {Component, OnInit} from '@angular/core';
import {CustomerActivestatusComponent} from "../customer/inner/customer-activestatus/customer-activestatus.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NewProductComponent} from "./inner/new-product/new-product.component";
import {UpdateProductComponent} from "./inner/update-product/update-product.component";
import {MatTooltip} from "@angular/material/tooltip";
import {ManageProductImageComponent} from "./inner/manage-product-image/manage-product-image.component";
import {ProductService} from "../../core/service/product/product.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime} from "rxjs";
import {ClipboardService} from "../../core/service/clipboard/clipboard.service";
import {ForexService} from "../../core/service/currencyexchanger/forex.service";
import {HeaderComponent} from "../../shared/header/header.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatInputModule} from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";


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
    MatCardActions
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  currencyrate : number = 0;
  productarray = null;
  searchtext = '';
  page:number = 0;
  size : number = 10;
  searchform:FormGroup = new FormGroup({
    text : new FormControl('')
  });
  constructor(private dialog:MatDialog,
              private productservice:ProductService,
              private clipboardservice : ClipboardService,
              private currencyEx : ForexService) {
  }

  ngOnInit(): void {

    this.currencyEx.exchange('USD','LKR').subscribe(res=>{
      this.currencyrate = res.result.LKR;
    },error => {
      this.currencyrate = 0;
      console.log(error);
    })

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



  private loadAllProducts() {
    this.productservice.search(this.searchtext,this.page,this.size).subscribe(response=>{
      this.productarray = response.data.datalist;
    },error => {
      console.error(error);
    })
  }

  coppyText(text:string){
    this.clipboardservice.coppy(text);
  }



}
