import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';
import { DonaComponent } from '../../components/dona/dona.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [IncrementadorComponent, DonaComponent],
})
export class ComponentsModule { }
