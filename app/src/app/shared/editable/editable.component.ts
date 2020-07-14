import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-value',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  @Input() value: number;
  @Input() readOnly: boolean;
  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();
  editMode = false;
  constructor() { }

  ngOnInit() { }

  onFocusOut() {
    this.changeValue.emit(this.value);
  }

  switchToEdit() {
    this.editMode = (this.readOnly) ? false : true;
  }
}
