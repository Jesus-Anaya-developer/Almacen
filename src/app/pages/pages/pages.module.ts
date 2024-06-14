import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BuscarIMEIComponent } from '../buscar-imei/buscar-imei.component';
import { BuscarFechaComponent } from '../buscar-fecha/buscar-fecha.component';
import { BuscarModeloComponent } from '../buscar-modelo/buscar-modelo.component';
import { BuscarGarantiaComponent } from '../buscar-garantia/buscar-garantia.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PagesComponent } from '../pages.component';
import { SharedModule } from "../../shared/shared/shared.module";

@NgModule({
  declarations: [
    BuscarIMEIComponent,
    BuscarFechaComponent,
    BuscarModeloComponent,
    BuscarGarantiaComponent,
    DashboardComponent,
    PagesComponent,
  ],
  exports: [
    BuscarIMEIComponent,
    BuscarFechaComponent,
    BuscarModeloComponent,
    BuscarGarantiaComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ]
})

export class PagesModule { }
