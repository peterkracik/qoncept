import { Component } from '@angular/core';

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

  /**
   * new data values
   * @param $event data returned from analysisGrid element
   */
  public onDataUpdate(data: any) {
    this.analysisData = data;
  }

  public parseData(data: string) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return this.analysisData;
    }
  }
}
