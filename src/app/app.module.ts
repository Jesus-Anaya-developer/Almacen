import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { BuscarIMEIComponent } from './pages/buscar-imei/buscar-imei.component';
import { BuscarFechaComponent } from './pages/buscar-fecha/buscar-fecha.component';
import { BuscarModeloComponent } from './pages/buscar-modelo/buscar-modelo.component';
import { BuscarGarantiaComponent } from './pages/buscar-garantia/buscar-garantia.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    BuscarIMEIComponent,
    BuscarFechaComponent,
    BuscarModeloComponent,
    BuscarGarantiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
