import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';
import { DonaComponent } from '../../components/dona/dona.component';
import { ModalImagenComponent } from '../../components/modal-imagen/modal-imagen.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent, ModalImagenComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementadorComponent, DonaComponent, ModalImagenComponent]
})
export class ComponentsModule {}
