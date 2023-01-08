export class EditCategoryRequest{
  id:string;
  title:string;
  productID:string[]

  constructor(id: string, title: string, productID: string[]) {
    this.id = id;
    this.title = title;
    this.productID = productID;
  }
}
