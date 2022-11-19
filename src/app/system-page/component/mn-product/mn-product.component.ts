import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-mn-product',
  templateUrl: './mn-product.component.html',
  styleUrls: ['./mn-product.component.scss']
})
export class MnProductComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'size', 'price', 'brand', 'quantity', 'category','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }


}
export interface PeriodicElement {
  id: string;
  title: string;
  size: number;
  price: number;
  brand: string;
  quantity: number;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},
  {id: '2323423',title: 'Giày Nike Air Force 1', size: 43, price: 500, brand:'Nike', quantity:200, category: 'Giày'},

];
