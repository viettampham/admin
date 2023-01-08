import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../login/Services/api.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {Category} from "../../../Models/ViewModels/Category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditProductRequest} from "../../../Models/RequestModels/EditProductRequest";

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.scss']
})
export class DialogEditProductComponent implements OnInit {
  url = '';
  hostimg = 'http://localhost:1235/';
  ListCategory: Category[]=[];
  ListCategoryChecked: Category[]=[];
  FormEditProduct:any;

  constructor(private api:ApiService,
              private fb:FormBuilder,
              private dialofRef: MatDialogRef<DialogEditProductComponent>,
              @Inject(MAT_DIALOG_DATA) public editData:any,) { }

  ngOnInit(): void {
    this.GetCategory()
    console.log(this.editData)
    this.FormEditProduct = this.fb.group({
      id:[''],
      title:[''],
      description:[''],
      image_url:[''],
      quantityAvailable:[''],
      price:[''],
      size:[''],
      brand:[''],
      categories: new FormArray([])
    });
    if (this.editData){

      this.url = this.editData.image_url;

      this.FormEditProduct.controls['id'].setValue(this.editData.id);
      this.FormEditProduct.controls['title'].setValue(this.editData.title);
      this.FormEditProduct.controls['description'].setValue(this.editData.description);
      this.FormEditProduct.controls['image_url'].setValue(this.editData.image_url);
      this.FormEditProduct.controls['quantityAvailable'].setValue(this.editData.quantityaVailable);
      this.FormEditProduct.controls['price'].setValue(this.editData.price);
      this.FormEditProduct.controls['size'].setValue(this.editData.size);
      this.FormEditProduct.controls['brand'].setValue(this.editData.brand);

      for (let c of this.editData.categorys){
        this.ListCategoryChecked.push(c.id)
      }
      console.log(this.ListCategoryChecked)

      const categoryID = this.FormEditProduct.controls['categories'] as FormArray;
      this.ListCategoryChecked.forEach(x=>{
        categoryID.push(new FormControl(x))
      })
    }

  }

  onSelectFile(e: any) {
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
      console.log(e.target.files)
      this.FormEditProduct.controls['image_url'].setValue(this.hostimg+e.target.files[0].name)
      console.log(e.target.files[0].name)
    }
  }
  GetCategory(){
    this.api.GetListCategory().subscribe(res=>{
      // @ts-ignore
      this.ListCategory = res
      /*console.log(this.ListCategory)*/
    })
  }

  HandleEditProduct() {
    // @ts-ignore
    this.api.EditProduct(this.FormEditProduct.value as EditProductRequest).subscribe(res=>{
      alert("Success")
      location.reload()
    },error => {
      alert("Error")
    })
  }



  isChecked(id: string) {
    for (let c of this.ListCategoryChecked){
      // @ts-ignore
      if (id === c){
        return true;
      }
    }
    return false;
  }

  onCheckBox(e: any) {
    // @ts-ignore
    const categoryID = this.FormEditProduct.controls['categories'] as FormArray;
    if (e.target.checked){
      categoryID.push(new FormControl(e.target.value));
    }else {
      const index = categoryID.controls.findIndex(x=>x.value == e.target.value)
      categoryID.removeAt(index)
    }
    console.log(categoryID)
  }
}
