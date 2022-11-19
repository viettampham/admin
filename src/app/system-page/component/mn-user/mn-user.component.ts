import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-mn-user',
  templateUrl: './mn-user.component.html',
  styleUrls: ['./mn-user.component.scss']
})
export class MnUserComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'name', 'address','action'];
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
  username: string;
  name: string;
  address: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
  {id: '2323423',username: 'Hydrogen', name: 'Tam', address: 'Hsdfsdf'},
];
