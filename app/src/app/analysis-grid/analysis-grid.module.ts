import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisGridComponent } from './analysis-grid.component';
import { EditableComponent } from '../shared/editable/editable.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnalysisGridComponent,
    EditableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AnalysisGridComponent]
})
export class AnalysisGridModule { }
