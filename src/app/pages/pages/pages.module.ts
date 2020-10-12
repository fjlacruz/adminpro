import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgressComponent } from '../../pages/progress/progress.component';
import { Grafica1Component } from '../../pages/grafica1/grafica1.component';
import { PagesComponent } from '../../pages/pages/pages.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components/components.module';




@NgModule({
  declarations: [DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,

  ],
  exports: [DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CommonModule
  ],
  imports: [CommonModule, ShareModule, AppRoutingModule, FormsModule, ComponentsModule]
})
export class PagesModule { }
