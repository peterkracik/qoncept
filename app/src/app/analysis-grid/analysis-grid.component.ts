import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AnalysisData, AnalysisDataElement } from './AnalysisData.interface';
import { DataService } from './data.service';

@Component({
  selector: 'AnylysisGrid',
  templateUrl: './analysis-grid.component.html',
  styleUrls: ['./analysis-grid.component.scss']
})
export class AnalysisGridComponent implements OnInit, OnChanges {
  @Input() readOnly: boolean;    // if possible to change values
  @Input() analysisData: AnalysisData[] = [];  // original data
  @Output() onDataUpdate = new EventEmitter();  // event emmited on change one of values

  data: AnalysisData[] = [];  // data to work with

  constructor(
    private dataSerice: DataService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
  }

  ngOnInit(): void {
    this.setData();
  }

  /**
   * set data to variable
   * and normalize it if necessary
   */
  setData() {
    this.data = this.dataSerice.normalizeData(this.analysisData); // normalize data (to assure same sorting in each row and handle empty)
  }

  /**
   * Event triggered by changing value in a table
   * @param $event new element value from the triggered event
   * @param element original value of element
   */
  onChangeValue($event: number, element: AnalysisDataElement) {
    element.value = $event;    // assign new value to the orinal element
    this.onDataUpdate.emit(this.data); // trigger event to parent
  }

}
