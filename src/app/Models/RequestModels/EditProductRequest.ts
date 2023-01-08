export class EditProductRequest{
  id:string;
  title:string;
  description:string;
  image_url:string;
  quantityAvailable:number;
  price:number;
  size:string;
  brand:string;
  categories:string[];


  constructor(id: string, title: string, description: string, image_url: string, quantityAvailable: number, price: number, size: string, brand: string, categories: string[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categories = categories;
  }
}
