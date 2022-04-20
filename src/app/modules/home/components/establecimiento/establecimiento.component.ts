import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Establecimiento } from 'src/app/core/models/establecimiento';
import { EstablecimientoDialogComponent } from '../../dialogs/establecimiento-dialog/establecimiento-dialog.component';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {
  establecimiento!: Establecimiento | undefined;
  establecimientos: Establecimiento[] = [
    //OBTENER LOS ESTABLECIMIENTOS DEL BACKEND por el SERVICE 
    {id: 1,nombre: 'Tupac Amaru',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {id: 2,nombre: 'Tupac Rumer',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {id: 3,nombre: 'Maria Auxiladora',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'},
    {id: 4,nombre: 'Respecto local',descripcion:'La nueva',abreviatura:'TA', estado: 'activo'}
  ]

  displayedColumns: string[] = ['Nombre','Estado' ,'Acciones'];

  dataSource: MatTableDataSource<Establecimiento> = new MatTableDataSource(this.establecimientos);

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog) { 
    let nombreEstablecimientos: string[] = [];
    this.establecimientos.forEach(e => nombreEstablecimientos.push(e.nombre));

    
  }

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

  }

  filtrarEstablecimiento(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  openDialogActualizar(establecimiento: Establecimiento): void {
    const dialogRef = this.dialog.open(EstablecimientoDialogComponent, {
      data: {establecimiento: establecimiento}
    });

    dialogRef.afterClosed().subscribe(result => {
      establecimiento = result;
      this.table.renderRows();
    });
  }

  openDialogCrear(): void {
    const dialogRef = this.dialog.open(EstablecimientoDialogComponent, {
      data: {establecimiento: this.establecimiento}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.establecimiento = result;
      if(this.establecimiento){
        this.establecimientos.push(this.establecimiento);
        this.table.renderRows();
        this.establecimiento = undefined;
      }

    });
  }

  eliminarEstablecimiento(establecimiento: Establecimiento): void {
    this.establecimientos = this.establecimientos.filter(e => e.id !== establecimiento.id);
    this.dataSource = new MatTableDataSource(this.establecimientos);
  }



}
