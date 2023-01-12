export class CreateCategoryRequest{
  tittle:string;
  productsID:string[];


  constructor(tittle: string, productsID: string[]) {
    this.tittle = tittle;
    this.productsID = productsID;
  }
}
