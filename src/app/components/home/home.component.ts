import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SelectionModel } from "@angular/cdk/collections";
import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { ThemePalette } from "@angular/material/core";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from "@ngx-gallery/core";
/////////////////// datos para la carga de la galeria paso 2/////////////////////
const data = [
  {
    srcUrl: "../../assets/img/images/tpfront.jpg",
    previewUrl: "../../assets/img/images/tpfront.jpg",
    textProperty: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/frontal.jpg",
    previewUrl: "../../assets/img/images/frontal.jpg",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/frontal-derecha.png",
    previewUrl: "../../assets/img/images/frontal-derecha.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/frontal-izquierda.png",
    previewUrl: "../../assets/img/images/frontal-izquierda.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/posterior.png",
    previewUrl: "../../assets/img/images/posterior.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/posterior-izquierda.png",
    previewUrl: "../../assets/img/images/posterior-izquierda.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/posterior-izquierda.png",
    previewUrl: "../../assets/img/images/posterior-izquierda.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/frontal-derecha.png",
    previewUrl: "../../assets/img/images/frontal-derecha.png",
    description: "fotografía 1",
  },
  {
    srcUrl: "../../assets/img/images/frontal-izquierda.png",
    previewUrl: "../../assets/img/images/frontal-izquierda.png",
    description: "fotografía 1",
  },
];
///// Interface utilizada para la tabla de piezas (paso3 )

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
  displayedColumns1: string[] = ["select","nombre","referencia","estado", "precio", "acciones"];
  selection1 = new SelectionModel<Piezas>(true, []);
  data = Object.assign( PIEZAS);
  dataSource1 = new MatTableDataSource<Piezas>(PIEZAS);
  //////////////////////// variables paso inicial ////////////
  dialogFormGroup: FormGroup;
  searchFormGroup: FormGroup;
  settingFormGroup: FormGroup;
  filterForm: FormGroup;
  myControl = new FormControl();
  currDiv: string = "step-1";
  currPdiv: string = "select";


  charge: boolean = false;
  tooltip: boolean = true;
  

  tercero: boolean = true;
  finalsuccess: boolean = true;

  private paginator: MatPaginator;
  
  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  setDataSourceAttributes() {
    this.dataSource1.paginator = this.paginator;
    
  }
  /////////////////// variables buscador y select modulo administrativo //////////////

  disabled = false;
  ShowFilter = true;
  limitSelection = false;
  submitted = false;
  region: any[];
  ciudad: any[];
  taller: any[];
  tipotaller: any[];
  calidadtaller: any[];
  marca: any[];
  selectedRegions: any[];
  selectedCities: any[];
  selectedAutoshop: any[];
  selectedAutoshoptype: any[];
  selectedAutoshopc: any[];
  dropdownSettings: any = {};

  public show: boolean = false;
  requiredRegion: boolean = true;
  requiredCity: boolean = true;
  requiredAutoshop: boolean = true;
  requiredAutoshoptype: boolean = true;
  requiredAutoshopc: boolean = true;
  ////////// variable para la creación de la galeria paso 2 ////////////////
  items: GalleryItem[];
  /////////////// clases y posiciones para los iconos de carga de fotos (paso 2) /////////////
  adds = [
    {
      id: 1,
      position: "top",
      status: "false",
    },
    {
      id: 2,
      position: "top-right",
      status: "false",
    },
    {
      id: 3,
      position: "right",
      status: "false",
    },
    {
      id: 4,
      position: "bottom-right",
      status: "false",
    },
    {
      id: 5,
      position: "bottom",
      status: "false",
    },
    {
      id: 6,
      position: "bottom-left",
      status: "false",
    },
    {
      id: 7,
      position: "left",
      status: "false",
    },
    {
      id: 8,
      position: "top-left",
      status: "false",
    },
  ];

  /////////////// Data para la tabla 3 y configuracion de la tabla /////////////////////////
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

  displayedColumns: string[] = ["select", "cantidad", "name"];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /////////////////////////// filtro tabla paso 3 ///////////////////////////////
  filteredOptions: Observable<PeriodicElement[]>;

  /////////////Spinner paso 4 /////////
  color: ThemePalette;
  pcolor: string;
  mode: ProgressSpinnerMode = "determinate";
  value = 61;

  ////////////////////////// paginador tabla paso 4 ////////////////////////////////
  page = 1;
  pageSize = 4;
  collectionSize = PIEZAS.length;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public gallery: Gallery,
    private fb: FormBuilder,
    private router: Router
  ) {}
  


  ngOnInit() {
    ///////////////////////////////
    this.region = [
      { item_id: 1, item_text: 'Antioquia' },
      { item_id: 2, item_text: 'Atlantico' },
      { item_id: 3, item_text: 'Bogotá' },
      { item_id: 4, item_text: 'Boyacá' },
      { item_id: 5, item_text: 'Caldas' },
      { item_id: 6, item_text: 'Casanare' }
    ];
    this.selectedRegions = [ ];

    this.ciudad = [
      { item_id: 1, item_text: 'Apartado' },
      { item_id: 2, item_text: 'Bello' },
      { item_id: 3, item_text: 'Caucasia' },
      { item_id: 4, item_text: 'Envigado' },
      { item_id: 5, item_text: 'Itagui' },
      { item_id: 6, item_text: 'Medellin' },
      { item_id: 7, item_text: 'Rionegro' }
    ];
    this.selectedCities = [ ];

    this.taller = [
      { item_id: 1, item_text: 'STARNIZA S.A.S - BOGOTA' },
      { item_id: 2, item_text: 'NAVITRANS AMERICAS' },
      { item_id: 3, item_text: 'KIA PLAZA BOGOTA' },
      { item_id: 4, item_text: 'CORA SA BOGOTA' },
      { item_id: 5, item_text: 'NEOSECURITY' },
      { item_id: 6, item_text: 'PRACO DIDACOL BTA MORATO' },
      { item_id: 7, item_text: 'SHAKO MOTORS SA BOGOTA' }
    ];
    this.selectedAutoshop=[ ];

    this.tipotaller = [
      { item_id: 1, item_text: 'Concesionario' },
      { item_id: 2, item_text: 'Multimarca' },
      { item_id: 3, item_text: 'Mixto' },
    ];
    this.selectedAutoshoptype=[ ];

    this.calidadtaller = [
      { item_id: 1, item_text: 'Tipo A' },
      { item_id: 2, item_text: 'Tipo B' },
      { item_id: 3, item_text: 'Tipo C' },
      { item_id: 4, item_text: 'Tipo D' },
    ];
    this.selectedAutoshopc=[ ];

    this.marca = [
      { item_id: 1, item_text: 'Nissan' },
      { item_id: 2, item_text: 'Chevrolet' },
      { item_id: 3, item_text: 'Kia' },
      { item_id: 4, item_text: 'Toyota' },
    ];
    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Seleccionar todos',
        unSelectAllText: 'UnSelect All',
        searchPlaceholderText: 'Buscar',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter
    };
    this.searchFormGroup = this.fb.group({
        
    });
   
    ///////////// inicializacion de las variables (init-var) /////////////
    this.dialogFormGroup = this.formBuilder.group({
      amparo: [false],
      servicio: [false],
      perdida: [false],
    });
    ///////////////////// Inicio galeria (paso 2) ///////////////////////////
    this.items = data.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.basicLightboxExample();
    this.withCustomGalleryConfig();
    ///////////////////// fin galeria ///////////////////////////
    ////////////////// filtro paso 3 input de busqueda //////////
    this.filterForm = this.formBuilder.group({
      filter: [],
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.ELEMENT_DATA.slice()))
    );
    ///////////////////// fin filtro paso 3 input de busqueda/////////////////////////////////
    ////////////////// cambio de color en el porcentaje de perdida paso 4 ////////////////////
    if (this.value <= 40) {
      this.color = "primary";
      this.pcolor = "#50e3c2";
    } else {
      if (this.value >= 41 && this.value <= 60) {
        this.color = "accent";
        this.pcolor = "#fb9900";
      } else {
        if (this.value >= 41) {
          this.color = "warn";
          this.pcolor = "#e24d56";
        }
      }
    }
    this.searchFormGroup = this.formBuilder.group({
      buscar: [], /// requerido
      region: ["", Validators.required],
      ciudad: ["", Validators.required],
      taller: [],
      tipotaller: [],
      calidadtaller:[]
    });
    this.settingFormGroup = this.formBuilder.group({
      casos: [], /// requerido
      marca: [],
     
    });
  }
  removeSelectedRows() {
    this.selection1.selected.forEach((item) => {
      let index: number = this.data.findIndex((d) => d === item);
      console.log(this.data.findIndex((d) => d === item));
      this.dataSource1.data.splice(index, 1);

      this.dataSource1 = new MatTableDataSource<Piezas>(this.dataSource1.data);
    });
    this.selection1 = new SelectionModel<Piezas>(true, []);
  }
  deleteTicket(rowid: number){
    this.dataSource1.data.splice(rowid, 1);
    this.dataSource1 = new MatTableDataSource<Piezas>(this.dataSource1.data);
    this.selection1 = new SelectionModel<Piezas>(true, []);
 }
  /////////////////// funciones generales //////////////////////////////////

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  ShowPdiv(divVal: string) {
    this.currPdiv = divVal;
  }
  toggle() {
    this.show = !this.show;
  }
  open_modal(content) {
    this.modalService.open(content);
  }
  open_modal_time(content) {
    setTimeout(() => {
      this.modalService.open(content);
    }, 3000);
    
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    this.setRegion();
    this.setCity();
    this.setAutoshop();
    this.setAutoshoptype();
    this.setAutoshopc();

  }
  //////////////////////// inicio funciones galeria paso 2 /////////////////////
  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  withCustomGalleryConfig() {
    const lightboxGalleryRef = this.gallery.ref("anotherLightbox");
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      nav: false,
      dots: true
    });

    lightboxGalleryRef.load(this.items);
  }
  //////////////////////// fin funciones galeria paso 2 /////////////////////
  ///////// Funcion para añadir la clase activa al icono paso 2/////////
  changeClass(event) {
    
      if (this.charge == true){
        setTimeout(() => {
          event.srcElement.innerText= "check"
          event.srcElement.classList.add("success");
        }, 4000);
      }
      else{
       
        setTimeout(() => {
          event.srcElement.innerText= "close"
          event.srcElement.classList.add("error");
          this.tooltip = false;
        }, 4000);
      }
    
    
  }

  /////////// Inicio funciones checkbox tabla paso 3 ///////////////////////////////
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }
  /////////// fin funciones checkbox tabla paso 3 ///////////////////////////////

  /////////// Inicio funciones checkbox tabla paso 4 ///////////////////////////////
  isAllSelected1() {
    const numSelected = this.selection1.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }

  masterToggle1() {
    this.isAllSelected1()
      ? this.selection1.clear()
      : this.dataSource1.data.forEach((row) => this.selection1.select(row));
  }

  checkboxLabel1(row?: Piezas): string {
    if (!row) {
      return `${this.isAllSelected1() ? "select" : "deselect"} all`;
    }
    return `${this.selection1.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }
  /////////// fin funciones checkbox tabla paso 4 ///////////////////////////////

  ///////////////////////// funcion para añadir fila paso 3 ////////////////
  addRow(asd: any) {
    this.dataSource.data.push({ position: 10, name: asd.srcElement.innerText });
    this.dataSource.filter = "";
  }
  ///////////// funciones filtro paso 3 ////////////////////////////
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  ///////////////// funcion paginador tabla paso 4 ///////////////////////////
  get piezas(): Piezas[] {
    return PIEZAS.map((piezas, i) => ({ id: i + 1, ...piezas })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  setRegion() {
    (this.selectedRegions.length > 0) ? this.requiredRegion = true : this.requiredRegion = false;
    if (this.selectedRegions.length > 0) { 
      return 'validRegionField' }
    else { 
      return 'invalidRegionField' }
  }
  setCity() {
    (this.selectedCities.length > 0) ? this.requiredCity = true : this.requiredCity = false;
    if (this.selectedCities.length > 0) { 
      return 'validCityField' }
    else { 
      return 'invalidCityField' }
  }
  setAutoshop() {
    (this.selectedAutoshop.length > 0) ? this.requiredAutoshop = true : this.requiredAutoshop = false;
    if (this.selectedAutoshop.length > 0) { 
      return 'validAutoshopField' }
    else { 
      return 'invalidAutoshopField' }
  }
  setAutoshoptype() {
    (this.selectedAutoshoptype.length > 0) ? this.requiredAutoshoptype = true : this.requiredAutoshoptype = false;
    if (this.selectedAutoshoptype.length > 0) { 
      return 'validAutoshoptypeField' }
    else { 
      return 'invalidAutoshoptypeField' }
  }
  setAutoshopc() {
    (this.selectedAutoshopc.length > 0) ? this.requiredAutoshopc = true : this.requiredAutoshopc = false;
    if (this.selectedAutoshopc.length > 0) { 
      return 'validAutoshopcField' }
    else { 
      return 'invalidAutoshopcField' }
  }
  remove(index){
    this.items.splice(index, 1);
    console.log('Delete image at index ', index);
  }

  submission() {
    this.setRegion();
    this.setCity();
    this.setAutoshop();
    this.setAutoshoptype();
    this.setAutoshopc();
    if (this.requiredRegion == true && 
      this.requiredCity == true && 
      this.requiredAutoshop == true &&
      this.requiredAutoshoptype == true && 
      this.requiredAutoshopc == true)
      {
        alert ('formulario valido');
    }
    else{
      alert ('formulario invalido');
    }
  }
  
}

export interface Piezas {
  position: number;
  nombre: string;
  referencia: string;
  precio: string;
}
const PIEZAS: Piezas[] = [
  {
    position: 1,
    nombre: "GUIA LATERAL DERECHO PARAGOLPES DELANTERO",
    referencia: "631421336R",
    precio: "$ 27.069 COP",

  },
  {
    position: 2,
    nombre: "TABLERO PUERTA DELANTERO DERECHO",
    referencia: "801004690R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 3,
    nombre: "GUARDAFANGO DERECHO",
    referencia: "631006147R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 4,
    nombre: "GUIA LATERAL DERECHO PARAGOLPES DELANTERO",
    referencia: "631421336R",
    precio: "$ 27.069 COP",

  },
  {
    position: 5,
    nombre: "TABLERO PUERTA DELANTERO DERECHO",
    referencia: "801004690R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 6,
    nombre: "GUARDAFANGO DERECHO",
    referencia: "631006147R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 7,
    nombre: "GUIA LATERAL DERECHO PARAGOLPES DELANTERO",
    referencia: "631421336R",
    precio: "$ 27.069 COP",

  },
  {
    position: 8,
    nombre: "TABLERO PUERTA DELANTERO DERECHO",
    referencia: "801004690R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 9,
    nombre: "GUARDAFANGO DERECHO",
    referencia: "631006147R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 10,
    nombre: "GUIA LATERAL DERECHO PARAGOLPES DELANTERO",
    referencia: "631421336R",
    precio: "$ 27.069 COP",

  },
  {
    position: 11,
    nombre: "TABLERO PUERTA DELANTERO DERECHO",
    referencia: "801004690R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 12,
    nombre: "GUARDAFANGO DERECHO",
    referencia: "631006147R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 13,
    nombre: "GUIA LATERAL DERECHO PARAGOLPES DELANTERO",
    referencia: "631421336R",
    precio: "$ 27.069 COP",

  },
  {
    position: 14,
    nombre: "TABLERO PUERTA DELANTERO DERECHO",
    referencia: "801004690R",
    precio: "$ 1.092.055 COP",

  },
  {
    position: 15,
    nombre: "GUARDAFANGO DERECHO",
    referencia: "631006147R",
    precio: "$ 1.092.055 COP",

  },
];