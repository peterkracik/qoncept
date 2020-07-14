import { Injectable } from '@angular/core';
import { AnalysisData, AnalysisDataElement } from './AnalysisData.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Method normalize data in the case rows are not sorted the same way and elements have different
   * position within rows, or some rows doesn't contain all elements
   *
   * @param data rows
   */
  public normalizeData(data: Array<AnalysisData>): Array<AnalysisData> {

    // get elements by row
    const elementsArr = data.map((row: AnalysisData) =>
      [...row.element_values.map((element: AnalysisDataElement) => element.key)]
    );
    const arr = [].concat.apply([], elementsArr); // flatten and concat to one array
    const elements = [...new Set(arr)]; // get all unique elements

    // @TODO: sorting if necessary

    // normalize data
    // in the case of sorting within rows is not the same, or rows contains not only same elements
    return data.map((item: AnalysisData) => {
      return {
        ...item,
        element_values: elements.map((elementName: string) =>
          (item.element_values.find((element: AnalysisDataElement) => element.key === elementName)
          || {key: elementName, value: null} as AnalysisDataElement)
        )
      } as AnalysisData;
    }) || []; // return array of object or empty array
  }
}
