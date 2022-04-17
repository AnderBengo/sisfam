import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Establecimiento } from 'src/app/core/models/establecimiento';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {
  formEstablecimiento: FormGroup = new FormGroup({});
  establecimientos: Establecimiento[] = [
    //OBTENER LOS ESTABLECIMIENTOS DEL BACKEND por el SERVICE 
    {nombre: 'Tupac Amaru',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {nombre: 'Tupac Rumer',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {nombre: 'Maria Auxiladora',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {nombre: 'Respecto local',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'}
  ]

  displayedColumns: string[] = ['Nombre','Estado' ,'Acciones'];
  dataSource = this.establecimientos;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor() { }

  ngOnInit(): void {

    this.formEstablecimiento = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('',[
        Validators.required
      ]),
      abreviatura: new FormControl('',[
        Validators.required
      ]),
      estado: new FormControl('',[
        Validators.required
      ])
    });
  }

  registrar() {
    const { nombre, descripcion,abreviatura,estado } = this.formEstablecimiento.value;
    let establecimiento: Establecimiento = { nombre, descripcion,abreviatura,estado };

    //ENVIAR EL ESTABLECIMIENTO AL BACKEND por el SERVICE 


    this.establecimientos.push(establecimiento);
    this.table.renderRows();
  }

}
