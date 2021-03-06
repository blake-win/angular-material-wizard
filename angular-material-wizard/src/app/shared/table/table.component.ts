import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSourceModel } from './table-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  @Input('data') tableData = [];
  @Input('cols') tableCols = [];

  @Output() deleteAction = new EventEmitter();
  @Output() editAction = new EventEmitter();

  dataSource: MatTableDataSource<DataSourceModel>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  get keys(): string[] {
    return this.tableCols.map(({ key }) => key);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes.tableData.currentValue;
  }

}
