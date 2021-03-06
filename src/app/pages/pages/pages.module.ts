import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgressComponent } from '../../pages/progress/progress.component';
import { Grafica1Component } from '../../pages/grafica1/grafica1.component';
import { PagesComponent } from '../../pages/pages/pages.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components/components.module';
import { AccountSettingsComponent } from '../../pages/account-settings/account-settings.component';
import { PromesasComponent } from '../../pages/promesas/promesas.component';
import { RxjsComponent } from '../../pages/rxjs/rxjs.component';
import { PerfilComponent } from '../../pages/perfil/perfil.component';
import { UsuariosComponent } from '../../pages/mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from '../mantenimientos/hospitales/hospitales.component';
import { PipesModule } from '../../pipes/pipes.module';
import { MedicosComponent } from '../mantenimientos/medicos/medicos.component';
import { MedicoComponent } from '../mantenimientos/medicos/medico.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UsuariosComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CommonModule
  ],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class PagesModule {}
