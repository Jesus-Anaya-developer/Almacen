import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarIMEIComponent } from '../buscar-imei/buscar-imei.component';
import { BuscarFechaComponent } from '../buscar-fecha/buscar-fecha.component';
import { BuscarModeloComponent } from '../buscar-modelo/buscar-modelo.component';
import { BuscarGarantiaComponent } from '../buscar-garantia/buscar-garantia.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    BuscarIMEIComponent,
    BuscarFechaComponent,
    BuscarModeloComponent,
    BuscarGarantiaComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuscarIMEIComponent,
    BuscarFechaComponent,
    BuscarModeloComponent,
    BuscarGarantiaComponent,
    DashboardComponent,
  ]
})

export class PagesModule { }
