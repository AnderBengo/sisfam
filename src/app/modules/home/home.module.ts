import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';

//Angular Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { EstablecimientoDialogComponent } from './dialogs/establecimiento-dialog/establecimiento-dialog.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { FamiliaDialogComponent } from './dialogs/familia-dialog/familia-dialog.component';
import { HistoriaFamiliarComponent } from './components/historia-familiar/historia-familiar.component';
import { HistoriaFamiliarDialogComponent } from './dialogs/historia-familiar-dialog/historia-familiar-dialog.component';
import { EstructuraFamiliarComponent } from './components/estructura-familiar/estructura-familiar.component';
import { EstructuraFamiliarDialogComponent } from './dialogs/estructura-familiar-dialog/estructura-familiar-dialog.component';
@NgModule({
  declarations: [
  
    HomePageComponent,
    EstablecimientoComponent,
    EstablecimientoDialogComponent,
    FamiliaComponent,
    FamiliaDialogComponent,
    HistoriaFamiliarComponent,
    HistoriaFamiliarDialogComponent,
    EstructuraFamiliarComponent,
    EstructuraFamiliarDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    SharedModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class HomeModule { }
