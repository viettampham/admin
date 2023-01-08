export class CreateProductRequest{
  title:string;
  description:string;
  image_url:string;
  quantityAvailable:number;
  price:number;
  size:string;
  brand:string;
  categorieID:string[];

  constructor(title: string, description: string, image_url: string, quantityAvailable: number, price: number, size: string, brand: string, categorieID: string[]) {
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categorieID = categorieID;
  }
}
