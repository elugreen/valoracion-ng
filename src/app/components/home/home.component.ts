import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

export interface PeriodicElement {
  Pieza: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Pieza: 'TABLERO PUERTA TRASERO DERECHO'},
  {position: 2, Pieza: 'GUARDAFANGO DERECHO'},
  {position: 3, Pieza: 'COSTADO DERECHO'},
  {position: 4, Pieza: 'CINTA DECORATIVA ANTERIOR PUERTA TRASERO DERECHOd'},
  {position: 5, Pieza: 'PUERTA DELANTERO DERECHO'},
  {position: 6, Pieza: 'TABLERO PUERTA DELANTERO DERECHO'},
  {position: 7, Pieza: 'COSTADO DERECHO'},
  {position: 8, Pieza: 'GUARDAFANGO DERECHO'},
  {position: 9, Pieza: 'ESTRIBO DERECHO'},
  {position: 10, Pieza: 'PUERTA DELANTERO DERECHO'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }],
  styles: []
})

export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  displayedColumns: string[] = ['select', 'Pieza'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit() {
  }
  currDiv: string = 'step-1';
  currPdiv: string= 'select'

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  ShowPdiv(divVal: string) {
    this.currPdiv = divVal;
  }
  open_modal(content) {
    this.modalService.open(content);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
