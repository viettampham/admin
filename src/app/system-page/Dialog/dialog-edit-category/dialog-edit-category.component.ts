import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../../login/Services/api.service";
import {EditCategoryRequest} from "../../../Models/RequestModels/EditCategoryRequest";

@Component({
  selector: 'app-dialog-edit-category',
  templateUrl: './dialog-edit-category.component.html',
  styleUrls: ['./dialog-edit-category.component.scss']
})
export class DialogEditCategoryComponent implements OnInit {
  dataForm:any;

  constructor(private fb:FormBuilder,
              private api:ApiService,
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef:MatDialogRef<DialogEditCategoryComponent>
              ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.dataForm = this.fb.group({
      id:[''],
      title:[''],
      productID: new FormArray([])
    })
    if (this.editData){
      this.dataForm.controls['id'].setValue(this.editData.id)
      this.dataForm.controls['title'].setValue(this.editData.title)
    }
  }

  HandleEdit() {
    if (this.editData){
      this.api.EditCategory(this.dataForm.value).subscribe(res=>{
        alert("Success")
        this.dialogRef.close()
        location.reload();
      })
    }
  }
}
