import { Component, ViewChild } from '@angular/core';
import { CoinService } from './coin.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['exchanges', 'volume'];
  title = 'codinova';
  constructor(private coinService: CoinService) { }
  private paginator!: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  ngOnInit() {
    this.getCoinData();
  }
 
  getCoinData() {
    this.coinService.getCoinData().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement)?.value;
    if (filterValue !== null && filterValue !== undefined) {
      const trimmedValue = filterValue.trim().toLowerCase();
  
      if (this.dataSource instanceof MatTableDataSource) {
        this.dataSource.filter = trimmedValue;
      } else {
        console.error('dataSource is not an instance of MatTableDataSource.');
      }
    }
  }

}


