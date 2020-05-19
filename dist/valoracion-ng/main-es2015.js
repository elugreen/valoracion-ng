(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"header-container\">\n    <div class=\"logo float-left\">\n      <img id=\"logo_accion\" src=\"../assets/img/logo.png\" alt=\"\">\n    </div>\n    <div class=\"sesion float-right\">\n      <div class=\"text\">\n        <p class=\"name\" id=\"\">robertcastro</p>\n        <p class=\"job visible\" id=\"\" hidden>FHV-VALORACION</p>\n        <p class=\"job\" id=\"\">bolivar</p>\n        <p class=\"job visible\" id=\"\" hidden>editar </p>\n        <p class=\"job visible\" id=\"\" hidden>c25d5d98-e3de-43d9-95cf-a5775c5651d4</p>\n        <p class=\"state\">En línea</p>\n      </div>\n      <img src=\"../assets/img/user1.png\" alt=\"\">\n    </div>\n  </div>\n  <button mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons session-close\">keyboard_arrow_down</i></button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"ShowPdiv('settings')\">Módulo parametrization</button>\n    <button mat-menu-item>Cerrar sesión</button>\n  </mat-menu>\n</header>\n<div class=\"main-content\">\n  <div class=\"container-fluid borderless\">\n    <div class=\"init-vars\" *ngIf=\"currPdiv == 'select'\">\n      <div class=\"modal-body\">\n        <div class=\"modal-content\">\n          <form [formGroup]=\"dialogFormGroup\">\n            <h3 class=\"texto_info okinfo-title\">Amparo a afectar</h3>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"amparo\">\n              <div class=\"row justify-content-between\">\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"tercero\" class=\"btn-checkbox\">Tercero</mat-radio-button>\n                </div>\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"asegurado\" class=\"btn-checkbox\">Asegurado</mat-radio-button>\n                </div>\n              </div>\n            </mat-radio-group>\n            <h3 class=\"texto_info\">Tipo de servicio</h3>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"servicio\">\n              <div class=\"row justify-content-between\">\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"Publico\" class=\"btn-checkbox\">Público</mat-radio-button>\n                </div>\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"particular\" class=\"btn-checkbox\">particular</mat-radio-button>\n                </div>\n              </div>\n            </mat-radio-group>\n            <h3 class=\"texto_info\">Pérdida total</h3>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"perdida\">\n              <div class=\"row justify-content-between\">\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"si\" class=\"btn-checkbox\">Si</mat-radio-button>\n                </div>\n                <div class=\"col-6\">\n                  <mat-radio-button value=\"no\" class=\"btn-checkbox\">No</mat-radio-button>\n                </div>\n              </div>\n            </mat-radio-group>\n          </form>\n        </div>\n      </div>\n      <div class=\"buttons btn-okinfo\">\n        <div class=\"container\"><button class=\"ok_info btn btn-warning\"\n            [disabled]=\"(!dialogFormGroup.controls.amparo.value || !dialogFormGroup.controls.servicio.value) || (!dialogFormGroup.controls.perdida.value)\"\n            (click)=\"ShowPdiv('steps')\">CONTINUAR</button></div>\n      </div>\n    </div>\n    <div class=\"steps\" *ngIf=\"currPdiv == 'steps'\">\n      <mat-horizontal-stepper>\n        <mat-step>\n          <div>\n            <div class=\"step-1\" *ngIf=\"currDiv == 'step-1'\">\n              <div class=\"breadcrumb\">\n                <p>Inicio / <b>Datos básicos</b></p>\n              </div>\n              <div class=\"row datos-vehiculo\">\n                <div class=\"col-md-6\">\n                  <div class=\"container\">\n                    <div class=\"form-group\">\n                      <input type=\"siniestro\" class=\"form-control\" id=\"siniestro\" placeholder=\"N° de siniestro *\">\n                    </div>\n                    <div class=\"text-container-upload\" (click)=\"hiddenfileinput.click()\">\n                      <input style=\"display: none\" type=\"file\" #hiddenfileinput>\n                      <div class=\"row\">\n                        <div class=\"col-4\">\n                          <i class=\"material-icons backup  align-middle\">backup</i>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"textos\">\n                            <p><b>Busca y selecciona</b> la imagen de la tarjeta de propiedad del vehículo</p>\n                            <p><span class=\"small-p\">Máximo 5MB/ JPG y PNG </span></p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"loading-container success dotted\">\n                      <div class=\"row\">\n                        <div class=\"col-3 col\">\n                          <span class=\"jpg\">jpg</span>\n                        </div>\n                        <div class=\"col-5 col\">\n                          <p>Tarjeta de propiedad</p>\n                        </div>\n                        <div class=\"col-2 col\">\n                          <p class=\"porcentaje\">100%</p>\n                        </div>\n                        <div class=\"col-2 col\">\n                          <span class=\"material-icons\">\n                            close\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"row progress-bar-porcent\">\n                        <div class=\"col-12\">\n                          <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"text-container-upload\" (click)=\"hiddenfileinput.click()\">\n                      <input style=\"display: none\" type=\"file\" #hiddenfileinput>\n                      <div class=\"row\">\n                        <div class=\"col-4\">\n                          <i class=\"material-icons backup  align-middle\">backup</i>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                          </div>\n                          <p class=\"spinner-text\">Cargando</p>\n                          <p>Espera un minuto mientras se carga el archivo</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group group-upload succes-input\">\n                      <input type=\"vin\" class=\"form-control\" id=\"vin\" placeholder=\"VIN *\">\n                    </div>\n                    <div class=\"form-group error-input\">\n                      <input type=\"marca\" class=\"form-control\" id=\"placa\" placeholder=\"Placa *\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"marca\" class=\"form-control\" id=\"marca\" placeholder=\"Marca\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"modelo\" class=\"form-control\" id=\"modelo\" placeholder=\"Modelo *\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"linea\" class=\"form-control\" id=\"linea\" placeholder=\"Linea *\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"container\">\n                    <div class=\"form-group\">\n                      <input type=\"año\" class=\"form-control\" id=\"año\" placeholder=\"Año\">\n                    </div>\n                    <div class=\"form-group\">\n                      <div id=\"Ciudad\" class=\"\">\n                        <select class=\"form-control\" id=\"ciudad\">\n                          <option id=\"\">Ciudad *</option>\n                        </select></div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div id=\"taller\" class=\"\">\n                        <select class=\"form-control\" id=\"taller\">\n                          <option id=\"\">Taller *</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div id=\"tipo_pintura-button\"><select class=\"form-control\" id=\"tipo_pintura\">\n                          <option value=\"metalizada\">Tipo de pintura</option>\n                          <option value=\"metalizada\">metalizada</option>\n                          <option value=\"monocapa\">monocapa</option>\n                          <option value=\"perlada\">perlada</option>\n                          <option value=\"solido bicapa\">solido bicapa</option>\n                          <option value=\"tricapa\">tricapa</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"imagenes-vehiculos\">\n                      <p class=\"regular\">Selecciona el tipo de vehículo</p>\n                      <div class=\"row\">\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col seleccionable active\" id=\"hatchback\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/hatchback.png\" alt=\"\">\n                              <p>Hatchback</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col seleccionable\" id=\"sedan\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/sedan.png\" alt=\"\">\n                              <p>Sedan</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col no_seleccionable\" id=\"pickup\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/pickup.png\" alt=\"\">\n                              <p>Pickup</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col no_seleccionable\" id=\"coupe\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/coupe.png\" alt=\"\">\n                              <p>Coupe</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col no_seleccionable\" id=\"camioneta\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/camioneta.png\" alt=\"\">\n                              <p>Camioneta</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-4 tipo_vehiculo\">\n                          <div class=\"container-col no_seleccionable\" id=\"campero\">\n                            <div class=\"content\">\n                              <img src=\"../assets/img/campero.png\" alt=\"\">\n                              <p>Campero</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col btn-container text-center\">\n                  <button class=\"btn btn-warning\" (click)=\"ShowDiv('step-2')\" matStepperNext>CONTINUAR</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-step>\n        <mat-step>\n          <div class=\"step-2\" *ngIf=\"currDiv == 'step-2'\">\n            <div class=\"breadcrumb\">\n              <p>Inicio / <b>Zonas afectadas</b></p>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"contenedor\">\n                <mat-tab-group>\n                  <mat-tab label=\"ZONAS AFECTADAS\">\n                    <div class=\"row top-div-tabs\">\n                      <div class=\"col-md-6 image-container\">\n                        <div class=\"top-div\">\n                          <img class=\"cenital-view\" src=\"../assets/img/cenital.png\" alt=\"\">\n                          <div *ngFor=\"let add of adds\" [class]=\"'picture '+ add.position\">\n                            <mat-icon class=\"add-picture\"\n                              (click)=\"hiddenfileinput.click(); open_modal_time(picturemodal); changeClass($event)\">add\n                            </mat-icon>\n                            <input style=\"display: none\" type=\"file\" #hiddenfileinput>\n                          </div>\n                          <div *ngIf=\"!tooltip\" class=\"tool\">\n                            <p>Se produjo un error al cargar de tu fotografía. <br> Haz click en el botón y vuelve a\n                              intentarlo. </p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 upload\">\n                        <p class=\"archivos\">Sube todos tus archivos</p>\n                        <div class=\"text-container-upload\">\n                          <input style=\"display: none\" type=\"file\" #hiddenfileinput>\n                          <div class=\"row\">\n                            <div class=\"col-4 col-md-12\">\n                              <i class=\"material-icons backup  align-middle\">backup</i>\n                            </div>\n                            <div class=\"col-8 col-md-12\">\n                              <div class=\"textos\">\n                                <p><span class=\"link\" (click)=\"hiddenfileinput.click()\">Busca en tu equipo</span> y\n                                  escoge los archivos que quieres subir</p>\n                                <p><span class=\"small-p\">Archivos soportados JPG, JEPG y PNG <br>Máximo 5MB </span></p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"loading-container success\">\n                          <div class=\"row\">\n                            <div class=\"col-3 col\">\n                              <span class=\"jpg\">jpg</span>\n                            </div>\n                            <div class=\"col-5 col\">\n                              <p>Archivo 1</p>\n                            </div>\n                            <div class=\"col-2 col\">\n                              <p class=\"porcentaje\">100%</p>\n                            </div>\n                            <div class=\"col-2 col\">\n                              <span class=\"material-icons\">\n                                close\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"row progress-bar-porcent\">\n                            <div class=\"col-12\">\n                              <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"loading-container warning\">\n                          <div class=\"row\">\n                            <div class=\"col-3 col\">\n                              <span class=\"jpg\">jpg</span>\n                            </div>\n                            <div class=\"col-5 col\">\n                              <p>Archivo 2</p>\n                            </div>\n                            <div class=\"col-2 col\">\n\n                            </div>\n                            <div class=\"col-2 col\">\n                              <span class=\"material-icons\">\n                                error\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"row progress-bar-porcent\">\n                            <div class=\"col-12\">\n                              <mat-progress-bar mode=\"determinate\" value=\"71\"></mat-progress-bar>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"loading-container error\">\n                          <div class=\"row\">\n                            <div class=\"col-3 col\">\n                              <span class=\"jpg\">jpg</span>\n                            </div>\n                            <div class=\"col-5 col\">\n                              <p>Archivo 3</p>\n                            </div>\n                            <div class=\"col-2 col\">\n                            </div>\n                            <div class=\"col-2 col\">\n                              <span class=\"material-icons\">\n                                close\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"row progress-bar-porcent\">\n                            <div class=\"col-12\">\n                              <mat-progress-bar mode=\"determinate\" value=\"10\"></mat-progress-bar>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </mat-tab>\n                  <mat-tab label=\"GALERÍA\">\n                    <div class=\"container\">\n                      <div class=\"gallery-icons\">\n                        <div class=\"icon-container\">\n                          <span class=\"material-icons\">\n                            edit\n                          </span>\n                        </div>\n                        <div class=\"icon-container\">\n                          <span class=\"material-icons\">\n                            delete\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"gallery\">\n                        <div class=\"row\">\n                          <div class=\"grid-item col-6 col-md-3\" *ngFor=\"let item of items; let i = index\"\n                            [lightbox]=\"i\">\n                            <p>Número de foto: {{item.data.textProperty}}</p>\n                            <div class=\"image-container\">\n                              <img [src]=\"item.data.thumb\">\n\n                              <span class=\"material-icons close-icon\" (click)=\"remove(i)\">\n                                close\n                              </span>\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button mat-button class=\"btn btn-light\" matStepperPrevious (click)=\"ShowDiv('step-1')\">Atrás</button>\n                <button mat-button class=\"btn btn-warning\" (click)=\"ShowDiv('step-3')\">Continuar</button>\n              </div>\n            </div>\n            <ng-template #picturemodal let-modal>\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body picturemodal\">\n                <div class=\"row\">\n                  <div class=\"col image-col\">\n                    <div class=\"modal-image\">\n                      <img src=\"../assets/img/images/frontal-izquierda.png\" alt=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                    <input type=\"text\" placeholder=\"Nombre de la fotografía\">\n                    <p>Selecciona la ubicación que corresponde la fotografía</p>\n                    <div class=\"group\">\n                      <mat-checkbox>Frontal</mat-checkbox>\n                      <mat-checkbox>Frontal derecha 45º</mat-checkbox>\n                      <mat-checkbox>Frontal izquierda 45º</mat-checkbox>\n                      <mat-checkbox>Lateral derecha</mat-checkbox>\n                    </div>\n                    <div class=\"group\">\n                      <mat-checkbox>Lateral izquierda</mat-checkbox>\n                      <mat-checkbox>Posterior</mat-checkbox>\n                      <mat-checkbox>Posterior derecha 45º</mat-checkbox>\n                      <mat-checkbox>Posterior izquierda 45º</mat-checkbox>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <div class=\"loading-container success dotted\">\n                      <div class=\"row\">\n                        <div class=\"col-3 col\">\n                          <span class=\"jpg\">jpg</span>\n                        </div>\n                        <div class=\"col-5 col\">\n                          <p>Archivo 1</p>\n                        </div>\n                        <div class=\"col-2 col\">\n                          <p class=\"porcentaje\">100%</p>\n                        </div>\n                        <div class=\"col-2 col\">\n                          <span class=\"material-icons\">\n                            close\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"row progress-bar-porcent\">\n                        <div class=\"col-12\">\n                          <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"step-3\" *ngIf=\"currDiv == 'step-3'\">\n            <div class=\"breadcrumb\">\n              <p>Inicio / <b>Valoración</b></p>\n            </div>\n            <div class=\"table-container example-container mat-elevation-z8 col-12\">\n              <h6><b>Busca el nombre del repuesto que deseas agregar</b></h6>\n              <form class=\"example-form\" [formGroup]=\"filterForm\">\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Agregar piezas</mat-label>\n                  <input ype=\"text\" placeholder=\"Agregar piezas\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\n                    [matAutocomplete]=\"auto\">\n                  <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\"\n                      (click)=\"addRow($event)\">\n                      {{option.name}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </form>\n\n              <div class=\"example-container mat-elevation-z8\">\n                <table mat-table [dataSource]=\"dataSource\">\n\n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                      </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\">\n                      <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                      </mat-checkbox>\n                    </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"cantidad\">\n                    <th mat-header-cell *matHeaderCellDef> Cantidad </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"input-td\"> <input type=\"text\"></td>\n                  </ng-container>\n                  <!-- Position Column -->\n                  <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Nombre del repuesto </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button mat-button class=\"btn btn-light\" (click)=\"ShowDiv('step-2')\">Atrás</button>\n                <button mat-button class=\"btn btn-warning\" (click)=\"ShowDiv('step-4')\" matStepperNext>Continuar</button>\n              </div>\n            </div>\n          </div>\n\n        </mat-step>\n        <mat-step>\n          <div class=\"step-4\" *ngIf=\"currDiv == 'step-4'\">\n            <div class=\"breadcrumb\">\n              <p>Inicio / <b>Valoración</b></p>\n            </div>\n            <div class=\"col-12 table-valoracion-container\">\n              <div class=\"row valoracion-texto\">\n                <div id=\"encabezado_resultado\" class=\"col-12\">\n                  <div class=\"row\">\n                    <div class=\"col-8 col-md-10\">\n                      <div class=\"row\">\n                        <div class=\"col-md-4\">\n                          <p id=\"informacion_placa\" class=\"info_detalle\">PLACA: UTN539</p>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <p id=\"informacion_marca\" class=\"info_general\">Marca: NIZAN</p>\n                          <p id=\"informacion_linea\" class=\"info_general\">Modelo: XTRAIL</p>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <p id=\"informacion_marca\" class=\"info_general\">Línea: D2</p>\n                          <p id=\"informacion_linea\" class=\"info_general\">Año: 2017</p>\n                        </div>\n\n                      </div>\n                    </div>\n                    <div class=\"col-4 col-md-2 float-right\">\n                      <div class=\"perdida-div float-right\">\n                        <div class=\"unicorn-dark-theme\">\n                          <mat-progress-spinner class=\"example-margin \" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n                          </mat-progress-spinner>\n                          <div class=\"texto-perdida\">\n                            <p class=\"valor\" [ngStyle]=\"{'color' : pcolor}\">{{value}} %</p>\n                            <p class=\"texto\" [ngStyle]=\"{'color' : pcolor}\">pérdida</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 table-valoracion-container\">\n              <div class=\"row table-edition\">\n                <div class=\"col-5 col-md-7\">\n                  <p class=\"info_detalle\">Valoración</p>\n                </div>\n                <div class=\"col-7 col-md-5\">\n                  <div class=\"row\">\n                    <div class=\"col-4 buttons-table-container\"> <button>\n                        <span class=\"material-icons\">\n                          save\n                        </span>\n\n                        <p class=\"button-table\">Guardar</p>\n                      </button></div>\n                    <div class=\"col-4 buttons-table-container\" (click)=\"removeSelectedRows()\"> <button>\n                        <span class=\"material-icons\">\n                          delete\n                        </span>\n                        <p class=\"button-table\">Eliminar</p>\n                      </button></div>\n                    <div class=\"col-4 buttons-table-container\"> <button>\n                        <span class=\"material-icons\">\n                          picture_as_pdf\n                        </span>\n                        <p class=\"button-table\">Exportar</p>\n                      </button></div>\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"mat-elevation-z8 example-container\">\n                <table mat-table [dataSource]=\"dataSource1\">\n\n\n                  <!-- Checkbox Column -->\n                  <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                      <mat-checkbox (change)=\"$event ? masterToggle1() : null\"\n                        [checked]=\"selection1.hasValue() && isAllSelected1()\"\n                        [indeterminate]=\"selection1.hasValue() && !isAllSelected1()\" [aria-label]=\"checkboxLabel1()\">\n                      </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\">\n                      <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection1.toggle(row) : null\"\n                        [checked]=\"selection1.isSelected(row)\" [aria-label]=\"checkboxLabel1(row)\">\n                      </mat-checkbox>\n                    </td>\n                  </ng-container>\n\n                  <!-- Unidad Column -->\n                  <ng-container matColumnDef=\"unidades\">\n                    <th mat-header-cell *matHeaderCellDef>unidades</th>\n                    <td mat-cell *matCellDef=\"let element\"><input type=\"text\" name=\"\" id=\"\"></td>\n                  </ng-container>\n\n                  <!-- Nombre Column -->\n                  <ng-container matColumnDef=\"nombre\">\n                    <th mat-header-cell *matHeaderCellDef>Nombre</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.nombre}} </td>\n                  </ng-container>\n\n                  <!-- Referencia Column -->\n                  <ng-container matColumnDef=\"referencia\">\n                    <th mat-header-cell *matHeaderCellDef>Referencia</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.referencia}} </td>\n                  </ng-container>\n                  <!-- estado -->\n                  <ng-container matColumnDef=\"estado\">\n                    <th mat-header-cell *matHeaderCellDef>Estado</th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      <select class=\"tableedit_d form-control editable\" id=\"_acc\">\n                        <option value=\"C\" selected>Cambio</option>\n                        <option value=\"R\">Reparacion</option>\n                      </select></td>\n                  </ng-container>\n                  <!-- Precio Column -->\n                  <ng-container matColumnDef=\"precio\">\n                    <th mat-header-cell *matHeaderCellDef>Predio</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.precio}} </td>\n                  </ng-container>\n                  <!-- Acciones Column -->\n                  <ng-container matColumnDef=\"acciones\">\n                    <th mat-header-cell *matHeaderCellDef>Acciones</th>\n                    <td mat-cell *matCellDef=\"let element; let j = index;\">\n                      <span class=\"material-icons\">\n                        edit\n                      </span>\n                      <span class=\"material-icons\" (click)=\"deleteTicket(j)\">\n                        delete\n                      </span>\n                    </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n                </table>\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\n              </div>\n\n\n            </div>\n            <div class=\"col-md-12 contenedor-planes\">\n              <div class=\"row\">\n                <div class=\"col-md-4 planes\">\n                  <div class=\"titulo\">\n                    <h3>Valor de Repuestos</h3>\n                  </div>\n                  <div class=\"text-container\">\n                    <p class=\"tiempo\">Tiempo estimado 5 días</p>\n                    <p class=\"valor\" id=\"valor_repuestos\">$ 2.381.646 COP</p>\n                    <p class=\"iva\">Valores sin IVA</p>\n                  </div>\n                </div>\n                <div class=\"col-md-4 planes\">\n                  <div class=\"titulo obra\">\n                    <h3>Valor Mano de obra</h3>\n                    <i id=\"edit\" class=\"material-icons edit editar\" (click)=\"ShowDiv('edit')\">edit</i>\n                  </div>\n                  <div class=\"text-container\">\n                    <p class=\"tiempo\">Tiempo estimado 10 horas</p>\n                    <p class=\"valor\" id=\"valor_tiempo\">$ 337.342 COP</p>\n                    <p class=\"iva\">Valores sin IVA</p>\n                  </div>\n                </div>\n                <div class=\"col-md-4 planes total\">\n                  <div class=\"titulo\">\n                    <h3>TOTAL VALORACIÓN</h3>\n                  </div>\n                  <div class=\"text-container\">\n                    <p class=\"tiempo\">Tiempo en reparación: <b id=\"tiempo_estimado\">9 días</b></p>\n                    <p class=\"valor-total\" id=\"total_valoracion\">$ 2.718.988 COP</p>\n                    <p class=\"iva\">Valores sin IVA</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button mat-button class=\"btn btn-light\" (click)=\"ShowDiv('step-3')\" matStepperPrevious>Atrás</button>\n                <button mat-button class=\"btn btn-warning\" (click)=\"ShowDiv('step-5')\">Continuar</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"edit\" *ngIf=\"currDiv == 'edit'\">\n            <div class=\"breadcrumb\">\n              <p>Inicio / <b>Valoración</b></p>\n            </div>\n            <div class=\"col-12 table-edicion-container\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"row\">\n                    <div class=\"table-responsive\">\n                      <h3>Mano de obra</h3>\n                      <table class=\"table table-striped\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Tipo de pintura</th>\n                            <th scope=\"col\">Horas de trabajo</th>\n                            <th scope=\"col\">Valor de mano de obra </th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n\n                            <td class=\"text-center\" scope=\"col\" id=\"Mano_obra_descripcion\">Mano de Obra Lamina</td>\n                            <td scope=\"col\">\n                              <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                            </td>\n                            <td scope=\"col\">\n                              <input type=\"text\" value=\"36000\">\n                            </td>\n                          </tr>\n                          <tr>\n                            <td class=\"text-center\" scope=\"col\">Mano de Obra Mecanica</td>\n                            <td scope=\"col\">\n                              <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                            </td>\n                            <td scope=\"col\">\n                              <input type=\"text\" value=\"36000\">\n                            </td>\n                          </tr>\n\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"row\">\n                    <div class=\"table-responsive\">\n                      <h3>Pintura</h3>\n                      <table class=\"table table-striped\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Areas</th>\n                            <th scope=\"col\">Horas </th>\n                            <th scope=\"col\">Valor Hora </th>\n                            <th scope=\"col\">Materiales de Pintura</th>\n                            <th scope=\"col\">Total (COP)</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>\n                              <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                            </td>\n                            <td>\n                              <div>\n                                <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                              </div>\n                            </td>\n                            <td>\n                              <div>\n                                <input class=\"text-center\" type=\"text\" id=\"horas_de_pintura\"></div>\n                            </td>\n                            <td>\n                              <div>\n                                <input class=\"text-center\" type=\"text\" id=\"valor_hora_pintura\">\n                              </div>\n\n                            <td id=\"valor_total_pintura\" class=\"text-center\">$ 0 COP</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                            </td>\n                            <td>\n                              <div>\n                                <input type=\"text\" id=\"Mano_obra_horas\" value=\"5.3\">\n                              </div>\n                            </td>\n                            <td>\n                              <div>\n                                <input class=\"text-center\" type=\"text\" id=\"horas_de_pintura\"></div>\n                            </td>\n                            <td>\n                              <div>\n                                <input class=\"text-center\" type=\"text\" id=\"valor_hora_pintura\">\n                              </div>\n                            <td id=\"valor_total_pintura\" class=\"text-center\">$ 0 COP</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 contenedor-planes edit-plan\">\n              <div class=\"row\">\n                <div class=\"col-md-12 planes especial\">\n                  <div class=\"titulo obra\">\n                    <h3>Valor Mano de obra</h3>\n                  </div>\n                  <div class=\"text-container\">\n                    <p class=\"tiempo\">Tiempo estimado 10.5 días</p>\n                    <p class=\"valor\" id=\"valor_tiempo_d\">$ 191.472 COP</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button mat-button class=\"btn btn-warning\" (click)=\"ShowDiv('step-4')\">Continuar</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"step-5\" *ngIf=\"currDiv == 'step-5'\">\n            <div class=\"breadcrumb\">\n              <p>Inicio / <b>Valoración</b></p>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"contenedor\">\n                <div *ngIf=\"tercero\">\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-6 \">\n                      <p class=\"titulo-notas\"><span class=\"material-icons\">\n                          comment\n                        </span> Notas</p>\n                      <div class=\"form-group\">\n                        <textarea class=\"form-control\" placeholder=\"Escribe tus notas\"></textarea>\n                      </div>\n                      <p class=\"observacion\">Máximo 500 caracteres</p>\n                    </div>\n                    <div class=\"col-12 col-md-6\">\n                      <div class=\"negociacion\">\n                        <p class=\"negociacion-titulo\">\n                          Negociación Final\n                        </p>\n                        <p class=\"texto-negociacion\">\n                          Ingresa el valor final de la negociación con\n                          el tercero en la colisión.\n                        </p>\n                        <input type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"!tercero\">\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-8 row-notas\">\n                      <p class=\"titulo-notas\"><span class=\"material-icons\">\n                          comment\n                        </span> Notas</p>\n                      <div class=\"form-group\">\n                        <textarea class=\"form-control\" placeholder=\"Escribe tus notas\"></textarea>\n                      </div>\n                      <p class=\"observacion\">Máximo 500 caracteres</p>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button mat-button class=\"btn btn-light\" (click)=\"ShowDiv('step-4')\">Atrás</button>\n                <button mat-button class=\"btn btn-warning\" (click)=\"ShowDiv('step-6')\" matStepperNext>Continuar</button>\n              </div>\n            </div>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n      <div class=\"step-6\" *ngIf=\"currDiv == 'step-6'\">\n        <div class=\"final\">\n          <div *ngIf=\"finalsuccess\" class=\"final-success\">\n            <div class=\"icon-container\">\n              <i class=\"material-icons exito\">check</i>\n            </div>\n            <h3>Muy Bien!</h3>\n            <p>Realizaste con exito tu Valoración..</p>\n            <p>Vuelve al <span class=\"azul\">Inicio</span> Inicio para realizar una\n              nueva Valoración o puedes <span class=\"azul\">salir</span>\n              de la plataforma\n            </p>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button class=\"btn-start\">INICIO</button>\n                <button class=\"btn-exit\" (click)=\"ShowDiv('step-6')\">SALIR</button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"!finalsuccess\" class=\"final-error\">\n            <div class=\"icon-container\">\n              <i class=\"material-icons exito\">warning</i>\n            </div>\n            <h3>Upps!</h3>\n            <p>Ocurrio un error y no hemos podido procesar tu valoración</p>\n            <p>Por favor <span class=\"azul\">vuelve a intentarlo</span> o comunicate con el area\n              de <span class=\"azul\">soporte</span>\n            </p>\n            <div class=\"row\">\n              <div class=\"col btn-container text-center\">\n                <button class=\"btn-exit\" (click)=\"ShowDiv('step-1')\">Vuelve a intentarlo</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"settings\" *ngIf=\"currPdiv == 'settings'\">\n      <div class=\"row main-row\">\n        <div class=\"col-4 search\">\n          <div class=\"contenedor\">\n\n            <form [formGroup]=\"searchFormGroup\" (ngSubmit)='submission()'>\n\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" formControlName=\"buscar\">\n              </div>\n              <div class=\"form-group\">\n                <ng-multiselect-dropdown name=\"region\" [placeholder]=\"'Región *'\" [data]=\"region\"\n                  formControlName=\"region\" [(ngModel)]=\"selectedRegions\" [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\" [required]='requiredRegion'>\n                </ng-multiselect-dropdown>\n                <div *ngIf=\"!requiredRegion\">\n                  <div class=\"invalid-feedback\">La región es un campo obligatorio</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <ng-multiselect-dropdown name=\"ciudad\" [placeholder]=\"'Ciudad *'\" [data]=\"ciudad\"\n                  formControlName=\"ciudad\" [(ngModel)]=\"selectedCities\" [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\" [required]='requiredCity'>\n                </ng-multiselect-dropdown>\n                <div *ngIf=\"!requiredCity\">\n                  <div class=\"invalid-feedback\">La ciudad es un campo obligatorio</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <ng-multiselect-dropdown name=\"taller\" [placeholder]=\"'Taller *'\" [data]=\"taller\"\n                  formControlName=\"taller\" [(ngModel)]=\"selectedAutoshop\" [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\" [required]='requiredAutoshop'>\n                </ng-multiselect-dropdown>\n                <div *ngIf=\"!requiredAutoshop\">\n                  <div class=\"invalid-feedback\">El taller es un campo obligatorio</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <ng-multiselect-dropdown name=\"tipotaller\" [placeholder]=\"'Tipo Taller*'\" [data]=\"tipotaller\"\n                  formControlName=\"tipotaller\" [(ngModel)]=\"selectedAutoshoptype\" [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\" [required]='requiredAutoshoptype'>\n                </ng-multiselect-dropdown>\n                <div *ngIf=\"!requiredAutoshoptype\">\n                  <div class=\"invalid-feedback\">El tipo de taller es un campo obligatorio</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <ng-multiselect-dropdown name=\"calidadtaller\" [placeholder]=\"'Calidad Taller*'\" [data]=\"calidadtaller\"\n                  formControlName=\"calidadtaller\" [(ngModel)]=\"selectedAutoshopc\" [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\" [required]='requiredAutoshopc'>\n                </ng-multiselect-dropdown>\n                <div *ngIf=\"!requiredAutoshopc\">\n                  <div class=\"invalid-feedback\">La calidad del taller es un campo obligatorio</div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col btn-container text-center\">\n                  <button mat-button class=\"btn btn-light\">Limpiar</button>\n                  <button mat-button class=\"btn btn-warning\" type=\"submit\">APlicar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-8 parameters\">\n          <div class=\"contenedor\">\n            <h3>Caracteristicas generales del taller</h3>\n            <hr>\n            <form [formGroup]=\"settingFormGroup\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"N° de casos\">\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <div id=\"marca\" class=\"\">\n                      <div class=\"form-group\">\n                        <ng-multiselect-dropdown name=\"marca\" [placeholder]=\"'Marca'\" [data]=\"marca\"\n                          formControlName=\"marca\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\">\n                        </ng-multiselect-dropdown>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <p class=\"col-title\">Estado</p>\n                  <div class=\"switch-button\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" id=\"togBtn\">\n                      <div class=\"slider round\">\n                        <!--ADDED HTML -->\n                        <span class=\"on\">Activo</span>\n                        <span class=\"off\">Inactivo</span>\n                        <!--END-->\n                      </div>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <p class=\"col-title\">Tipo de Amparo</p>\n                    <div class=\"row\">\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                        <div class=\"col-6 nopadding\">\n                          <label class=\"btn btn-outline-secondary active\">\n                            <input type=\"radio\" name=\"options\" id=\"option1\" checked>RC\n                          </label>\n                          <label class=\"btn btn-outline-secondary\">\n                            <input type=\"radio\" name=\"options\" id=\"option2\">PPT\n                          </label>\n                        </div>\n                        <div class=\"col-6 nopadding\">\n                          <label class=\"btn btn-outline-secondary\">\n                            <input type=\"radio\" name=\"options\" id=\"option3\">PPD\n                          </label>\n                          <label class=\"btn btn-outline-secondary\">\n                            <input type=\"radio\" name=\"options\" id=\"option4\">EXPRESS\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <p class=\"col-title\">Incendios</p>\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                      <label class=\"btn btn-outline-secondary small active\">\n                        <input type=\"radio\" name=\"options\" id=\"option1\" checked>Si\n                      </label>\n                      <label class=\"btn btn-outline-secondary small\">\n                        <input type=\"radio\" name=\"options\" id=\"option2\">No\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <p class=\"col-title\">Inundados</p>\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                      <label class=\"btn btn-outline-secondary small active\">\n                        <input type=\"radio\" name=\"options\" id=\"option1\" checked>Si\n                      </label>\n                      <label class=\"btn btn-outline-secondary small\">\n                        <input type=\"radio\" name=\"options\" id=\"option2\">No\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <mat-label>Mano de Obra Latonería</mat-label>\n                    <input matInput placeholder=\"$ Valor Latonería*\" class=\"form-control\">\n                  </div>\n\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <mat-label>Mano de Obra Mecánica</mat-label>\n                    <input matInput placeholder=\"$ Valor Mecánica*\" class=\"form-control\">\n                  </div>\n\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <mat-label>Mano de Obra Pintura</mat-label>\n                    <input matInput placeholder=\"$ Valor Pintura*\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <hr>\n              <h3>Pintura</h3>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"form-group\">\n                    <p class=\"col-title\">Calidad de pintura</p>\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                      <label class=\"btn btn-outline-secondary active\">\n                        <input type=\"radio\" name=\"options\" id=\"option1\" checked>Agua\n                      </label>\n                      <label class=\"btn btn-outline-secondary\">\n                        <input type=\"radio\" name=\"options\" id=\"option2\">Solvente\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <mat-label>Valor Constante de Pintura</mat-label>\n                    <input matInput placeholder=\"$ Valor constante pintura *\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <mat-label>Valor M2 Pintura Monocapa</mat-label>\n                    <input matInput placeholder=\"$ Valor M2 Monocapa *\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <mat-label>Valor M2 Pintura Bicapa</mat-label>\n                    <input matInput placeholder=\"$ Valor M2 Bicapa *\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <mat-label>Valor M2 Pintura Tricapa</mat-label>\n                    <input matInput placeholder=\"$ Valor M2 Tricapa *\" class=\"form-control\">\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col btn-container text-right\">\n                  <button mat-button class=\"btn btn-light\">Limpiar</button>\n                  <button mat-button class=\"btn btn-warning\">APlicar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"col-12\">\n    <p>Powered by <b>subocol</b></p>\n  </div>\n</footer>\n<div class=\"loader\" *ngIf=\"currPdiv == 'loader'\">\n  <div class=\"loader-container\">\n    <div class=\"bar-container\">\n      <h6 class=\"loader-title\">Cargando</h6>\n      <p class=\"loader-porcent\">50%</p>\n      <div class=\"next-container\">\n        <div class=\"loader__bar\"></div>\n        <div class=\"loader__bar\"></div>\n        <div class=\"loader__bar\"></div>\n        <div class=\"loader__bar\"></div>\n        <div class=\"loader__bar\"></div>\n        <div class=\"loader__ball\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid login-container\">\n  <div class=\"login-form-container\">\n    <div class=\"logo\">\n      <img src=\"../assets/img/logo-blue.png\" alt=\"\">\n    </div>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"usuario\">Usuario</label>\n        <input type=\"usuario\" class=\"form-control\"  formControlName=\"username\" id=\"usuario\" placeholder=\"Usuario\"  [ngClass]=\"{ 'is-invalid': (submitted || f.username.touched) && f.username.errors }\">\n        <div *ngIf=\"(submitted || f.username.touched) && f.username.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.username.errors.required\">El usuario es un campo requerido</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Contraseña</label>\n\t\t<input type=\"password\"  formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Contraseña\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\" >\n      <div *ngIf=\"f.password.errors.required\">La contraseña es un campo requerido</div>\n      <div *ngIf=\"f.password.errors.minlength\">La contraseña debe ser de 6 caracteres mínimo</div>\n\t\t</div>\n      </div>\n      <div class=\"custom-control custom-checkbox terminos\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"terminos\" formControlName=\"acceptTerms\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\">\n        <label class=\"custom-control-label\" for=\"terminos\">Acepto los términos y condiciones.</label>\n        <br>\n        <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Términos y condiciones es un campo obligatorio</div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button type=\"submit\" class=\"btn btn-warning\">Ingresar</button>\n        </div> \n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");





const routes = [
    { path: 'home', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'valoracion-ng';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: CustomHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHammerConfig", function() { return CustomHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm2015/ngx-gallery-lightbox.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_27__);































/* Custom Hammer configuration */


class CustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'pan': {
                direction: hammerjs__WEBPACK_IMPORTED_MODULE_27__["DIRECTION_ALL"],
            }
        };
    }
}
/* End Custom hammer configuration */
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_21__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_22__["LightboxModule"],
            ngx_gallery__WEBPACK_IMPORTED_MODULE_23__["NgxGalleryModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__["NgMultiSelectDropDownModule"].forRoot()
        ],
        providers: [
            {
                provide: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_21__["GALLERY_CONFIG"],
                useValue: {
                    dots: true,
                    imageSize: 'contain',
                    thumbs: false,
                    nav: false,
                }
            },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"], useClass: CustomHammerConfig }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");












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
let HomeComponent = class HomeComponent {
    constructor(modalService, formBuilder, gallery, fb, router) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.gallery = gallery;
        this.fb = fb;
        this.router = router;
        this.displayedColumns1 = ["select", "nombre", "referencia", "estado", "precio", "acciones"];
        this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.data = Object.assign(PIEZAS);
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](PIEZAS);
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.currDiv = "step-1";
        this.currPdiv = "select";
        this.charge = false;
        this.tooltip = true;
        this.tercero = true;
        this.finalsuccess = true;
        /////////////////// variables buscador y select modulo administrativo //////////////
        this.disabled = false;
        this.ShowFilter = true;
        this.limitSelection = false;
        this.submitted = false;
        this.dropdownSettings = {};
        this.show = false;
        this.requiredRegion = true;
        this.requiredCity = true;
        this.requiredAutoshop = true;
        this.requiredAutoshoptype = true;
        this.requiredAutoshopc = true;
        /////////////// clases y posiciones para los iconos de carga de fotos (paso 2) /////////////
        this.adds = [
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
        this.ELEMENT_DATA = [
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
        this.displayedColumns = ["select", "cantidad", "name"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.mode = "determinate";
        this.value = 61;
        ////////////////////////// paginador tabla paso 4 ////////////////////////////////
        this.page = 1;
        this.pageSize = 4;
        this.collectionSize = PIEZAS.length;
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    setDataSourceAttributes() {
        this.dataSource1.paginator = this.paginator;
    }
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
        this.selectedRegions = [];
        this.ciudad = [
            { item_id: 1, item_text: 'Apartado' },
            { item_id: 2, item_text: 'Bello' },
            { item_id: 3, item_text: 'Caucasia' },
            { item_id: 4, item_text: 'Envigado' },
            { item_id: 5, item_text: 'Itagui' },
            { item_id: 6, item_text: 'Medellin' },
            { item_id: 7, item_text: 'Rionegro' }
        ];
        this.selectedCities = [];
        this.taller = [
            { item_id: 1, item_text: 'STARNIZA S.A.S - BOGOTA' },
            { item_id: 2, item_text: 'NAVITRANS AMERICAS' },
            { item_id: 3, item_text: 'KIA PLAZA BOGOTA' },
            { item_id: 4, item_text: 'CORA SA BOGOTA' },
            { item_id: 5, item_text: 'NEOSECURITY' },
            { item_id: 6, item_text: 'PRACO DIDACOL BTA MORATO' },
            { item_id: 7, item_text: 'SHAKO MOTORS SA BOGOTA' }
        ];
        this.selectedAutoshop = [];
        this.tipotaller = [
            { item_id: 1, item_text: 'Concesionario' },
            { item_id: 2, item_text: 'Multimarca' },
            { item_id: 3, item_text: 'Mixto' },
        ];
        this.selectedAutoshoptype = [];
        this.calidadtaller = [
            { item_id: 1, item_text: 'Tipo A' },
            { item_id: 2, item_text: 'Tipo B' },
            { item_id: 3, item_text: 'Tipo C' },
            { item_id: 4, item_text: 'Tipo D' },
        ];
        this.selectedAutoshopc = [];
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
        this.searchFormGroup = this.fb.group({});
        ///////////// inicializacion de las variables (init-var) /////////////
        this.dialogFormGroup = this.formBuilder.group({
            amparo: [false],
            servicio: [false],
            perdida: [false],
        });
        ///////////////////// Inicio galeria (paso 2) ///////////////////////////
        this.items = data.map((item) => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__["ImageItem"]({ src: item.srcUrl, thumb: item.previewUrl }));
        this.basicLightboxExample();
        this.withCustomGalleryConfig();
        ///////////////////// fin galeria ///////////////////////////
        ////////////////// filtro paso 3 input de busqueda //////////
        this.filterForm = this.formBuilder.group({
            filter: [],
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((value) => (typeof value === "string" ? value : value.name)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((name) => (name ? this._filter(name) : this.ELEMENT_DATA.slice())));
        ///////////////////// fin filtro paso 3 input de busqueda/////////////////////////////////
        ////////////////// cambio de color en el porcentaje de perdida paso 4 ////////////////////
        if (this.value <= 40) {
            this.color = "primary";
            this.pcolor = "#50e3c2";
        }
        else {
            if (this.value >= 41 && this.value <= 60) {
                this.color = "accent";
                this.pcolor = "#fb9900";
            }
            else {
                if (this.value >= 41) {
                    this.color = "warn";
                    this.pcolor = "#e24d56";
                }
            }
        }
        this.searchFormGroup = this.formBuilder.group({
            buscar: [],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ciudad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            taller: [],
            tipotaller: [],
            calidadtaller: []
        });
        this.settingFormGroup = this.formBuilder.group({
            casos: [],
            marca: [],
        });
    }
    removeSelectedRows() {
        this.selection1.selected.forEach((item) => {
            let index = this.data.findIndex((d) => d === item);
            console.log(this.data.findIndex((d) => d === item));
            this.dataSource1.data.splice(index, 1);
            this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataSource1.data);
        });
        this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    deleteTicket(rowid) {
        this.dataSource1.data.splice(rowid, 1);
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataSource1.data);
        this.selection1 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    /////////////////// funciones generales //////////////////////////////////
    ShowDiv(divVal) {
        this.currDiv = divVal;
    }
    ShowPdiv(divVal) {
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
    onItemSelect(item) {
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
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__["ImageSize"].Cover,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__["ThumbnailsPosition"].Top,
            nav: false,
            dots: true
        });
        lightboxGalleryRef.load(this.items);
    }
    //////////////////////// fin funciones galeria paso 2 /////////////////////
    ///////// Funcion para añadir la clase activa al icono paso 2/////////
    changeClass(event) {
        if (this.charge == true) {
            setTimeout(() => {
                event.srcElement.innerText = "check";
                event.srcElement.classList.add("success");
            }, 4000);
        }
        else {
            setTimeout(() => {
                event.srcElement.innerText = "close";
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
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "select" : "deselect"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
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
    checkboxLabel1(row) {
        if (!row) {
            return `${this.isAllSelected1() ? "select" : "deselect"} all`;
        }
        return `${this.selection1.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    /////////// fin funciones checkbox tabla paso 4 ///////////////////////////////
    ///////////////////////// funcion para añadir fila paso 3 ////////////////
    addRow(asd) {
        this.dataSource.data.push({ position: 10, name: asd.srcElement.innerText });
        this.dataSource.filter = "";
    }
    ///////////// funciones filtro paso 3 ////////////////////////////
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    displayFn(user) {
        return user && user.name ? user.name : "";
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.ELEMENT_DATA.filter((option) => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    ///////////////// funcion paginador tabla paso 4 ///////////////////////////
    get piezas() {
        return PIEZAS.map((piezas, i) => (Object.assign({ id: i + 1 }, piezas))).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    setRegion() {
        (this.selectedRegions.length > 0) ? this.requiredRegion = true : this.requiredRegion = false;
        if (this.selectedRegions.length > 0) {
            return 'validRegionField';
        }
        else {
            return 'invalidRegionField';
        }
    }
    setCity() {
        (this.selectedCities.length > 0) ? this.requiredCity = true : this.requiredCity = false;
        if (this.selectedCities.length > 0) {
            return 'validCityField';
        }
        else {
            return 'invalidCityField';
        }
    }
    setAutoshop() {
        (this.selectedAutoshop.length > 0) ? this.requiredAutoshop = true : this.requiredAutoshop = false;
        if (this.selectedAutoshop.length > 0) {
            return 'validAutoshopField';
        }
        else {
            return 'invalidAutoshopField';
        }
    }
    setAutoshoptype() {
        (this.selectedAutoshoptype.length > 0) ? this.requiredAutoshoptype = true : this.requiredAutoshoptype = false;
        if (this.selectedAutoshoptype.length > 0) {
            return 'validAutoshoptypeField';
        }
        else {
            return 'invalidAutoshoptypeField';
        }
    }
    setAutoshopc() {
        (this.selectedAutoshopc.length > 0) ? this.requiredAutoshopc = true : this.requiredAutoshopc = false;
        if (this.selectedAutoshopc.length > 0) {
            return 'validAutoshopcField';
        }
        else {
            return 'invalidAutoshopcField';
        }
    }
    remove(index) {
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
            this.requiredAutoshopc == true) {
            alert('formulario valido');
        }
        else {
            alert('formulario invalido');
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__["Gallery"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: false })
], HomeComponent.prototype, "matPaginator", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        providers: [
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { displayDefaultIndicatorType: false },
            },
        ],
    })
], HomeComponent);

const PIEZAS = [
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


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        ////// validadores para los campos del formulario de login //////////
        this.registerForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    ////// funcion que al enviar el formulario valida los campos y realiza la redirección /////
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        if (this.registerForm.valid) {
            this.router.navigate(["/home"]);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\valoracion-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map