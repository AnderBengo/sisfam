import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Establecimiento } from 'src/app/core/models/establecimiento';
import { EstablecimientoComponent } from '../../components/establecimiento/establecimiento.component';

@Component({
  selector: 'app-establecimiento-dialog',
  templateUrl: './establecimiento-dialog.component.html',
  styleUrls: ['./establecimiento-dialog.component.css']
})
export class EstablecimientoDialogComponent implements OnInit {
  formEstablecimiento: FormGroup = new FormGroup({});
  constructor(public dialogRef: MatDialogRef<EstablecimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.establecimiento){
      let establecimiento: Establecimiento = this.data.establecimiento;
      this.formEstablecimiento = new FormGroup({
        nombre: new FormControl(establecimiento.nombre, [
          Validators.required
        ]),
        descripcion: new FormControl(establecimiento.descripcion,[
          Validators.required
        ]),
        abreviatura: new FormControl(establecimiento.abreviatura,[
          Validators.required
        ]),
        estado: new FormControl(establecimiento.estado,[
          Validators.required
        ])
      });
    }else {
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
  }

  
  registrar() {
    console.log('service.crear() => Succesfull');
  }

  actualizar() {
    console.log('service.actualizar() => Succesfull');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
