import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscarFechaComponent } from './buscar-fecha/buscar-fecha.component';
import { BuscarGarantiaComponent } from './buscar-garantia/buscar-garantia.component';
import { BuscarIMEIComponent } from './buscar-imei/buscar-imei.component';
import { BuscarModeloComponent } from './buscar-modelo/buscar-modelo.component';
import { PagesComponent } from './pages.component';


// Importa los componentes de las páginas

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'buscarFecha', component: BuscarFechaComponent, data: { titulo: 'Buscar por fechas' } },
      { path: 'buscarGarantia', component: BuscarGarantiaComponent, data: { titulo: 'Buscar garantias' } },
      { path: 'buscarImei', component: BuscarIMEIComponent, data: { titulo: 'Buscar IMEI' } },
      { path: 'buscarModelo', component: BuscarModeloComponent, data: { titulo: 'Buscar modelos' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
