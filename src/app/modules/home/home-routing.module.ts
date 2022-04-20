import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import { EstructuraFamiliarComponent } from './components/estructura-familiar/estructura-familiar.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { HistoriaFamiliarComponent } from './components/historia-familiar/historia-familiar.component';

const routes: Routes = [
  {
    path: 'establecimientos',
    component: EstablecimientoComponent
  },
  {
    path: 'familias',
    component: FamiliaComponent
  },
  {
    path: 'historia-familiar',
    component: HistoriaFamiliarComponent
  },
  {
    path: 'estructura-familiar',
    component: EstructuraFamiliarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
