import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SelectionModel } from "@angular/cdk/collections";
import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import listadoPiezas from "../../../assets/json/valoracion.json";
import nombrespiezas from "../../../assets/json/piezas.json";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { HttpClientModule } from "@angular/common/http";
import { ThemePalette } from "@angular/material/core";


export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  styles: [],
})
export class HomeComponent implements OnInit {
  Piezas: any = listadoPiezas;

  myControl = new FormControl();
  public show: boolean = false;

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: "TABLERO PUERTA TRASERO DERECHO" },
    { position: 2, name: "GUARDAFANGO DERECHO" },
    { position: 3, name: "COSTADO DERECHO" },
    { position: 4, name: "CINTA DECORATIVA ANTERIOR PUERTA TRASERO DERECHOd" },
    { position: 5, name: "PUERTA DELANTERO DERECHO" },
    { position: 6, name: "TABLERO PUERTA DELANTERO DERECHO" },
    { position: 7, name: "COSTADO DERECHO" },
    { position: 8, name: "GUARDAFANGO DERECHO" },
    { position: 9, name: "ESTRIBO DERECHO" },
    { position: 10, name: "PUERTA DELANTERO DERECHO" },
  ];
  adds = [
    {
      id: 1,
      position: 'top',
      status: 'false'
     
    },
    {
      id: 2,
      position: 'top-right',
      status: 'false'
     
    },
    {
      id: 3,
      position: 'right',
      status: 'false'
     
    },
    {
      id: 4,
      position: 'bottom-right',
      status: 'false'
     
    },
    {
      id: 5,
      position: 'bottom',
      status: 'false'
     
    },
    {
      id: 6,
      position: 'bottom-left',
      status: 'false'
      
    },
    {
      id: 7,
      position: 'left',
      status: 'false'
     
    },
    {
      id: 8,
      position: 'top-left',
      status: 'false'
      
    }

  ]

  filteredOptions: Observable<PeriodicElement[]>;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  displayedColumns: string[] = ["select", "name"];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /////////////Spinner /////////
  color: ThemePalette;
  pcolor: string;
  mode: ProgressSpinnerMode = "determinate";
  value = 49;

  /*  if(value.value < 30){
        this.color = 'primary';
    }
 */

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }
  dialogFormGroup: FormGroup;
  filterForm: FormGroup;
  ngOnInit() {
   
    if(this.value <= 40){
        this.color = 'primary';
        this.pcolor = '#4caf50';
    }
    else{
      if((this.value >= 41 ) && (this.value <= 60)) {
      this.color = 'accent';
      this.pcolor = '#ffeb3b';
    }
      else{
        if(this.value >= 41 ){
          this.color = 'warn';
          this.pcolor = '#f44336';
        }
      }
    }
    
    this.dialogFormGroup = this.formBuilder.group({
      amparo: [false],
      servicio: [false],
      perdida: [false],
    });
    this.filterForm = this.formBuilder.group({
      filter: [],
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.ELEMENT_DATA.slice()))
    );
  }

  currDiv: string = "step-1";
  /* currPdiv: string = "select"; */
  currPdiv: string = "steps";

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
  icon = "camera_alt";

  toggle() {
    this.show = !this.show;
  }
  changeClass(event) {
    event.srcElement.classList.remove("active");
    setTimeout(() => {
      event.srcElement.classList.add("active");
    }, 0);
  }


  displayFn(user: PeriodicElement): string {
    return user && user.name ? user.name : "";
  }

  private _filter(name: string): PeriodicElement[] {
    const filterValue = name.toLowerCase();

    return this.ELEMENT_DATA.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
