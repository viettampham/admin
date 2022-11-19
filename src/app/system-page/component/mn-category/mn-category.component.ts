import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-mn-category',
  templateUrl: './mn-category.component.html',
  styleUrls: ['./mn-category.component.scss']
})
export class MnCategoryComponent implements OnInit,AfterViewInit {

  constructor() { }
  displayedColumns: string[] = ['id', 'title','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  id: string;
  title: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},
  {id: '2323423',title: 'Giày Nike Air Force 1'},

];
