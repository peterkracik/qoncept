import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qoncept';

  readOnly = false;
  analysisData = [
    { key: 'Min', element_values:
    [{ key: 'C', value: 0.12 }, { key: 'Si', value: 0.35 }] },
    {
      key: 'Max', element_values:
        [{ key: 'Si', value: 0.14 }, { key: 'C', value: 0.45 }]
    },
  ];

  @ViewChild('dataRef') dataEl: ElementRef;

  /**
   * new data values
   * @param $event data returned from analysisGrid element
   */
  public onDataUpdate(data: any) {
    this.analysisData = data;
  }

  /**
   * update data when input changes
   * @throws error if error with the json format
   */
  public inputChange() {
    const content = this.dataEl.nativeElement.value;
    try {
      const jsonContent = JSON.parse(content);
      this.analysisData = jsonContent;
    } catch (e) {
      console.error('wrong format');
    }
  }
}
