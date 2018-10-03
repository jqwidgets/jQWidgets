import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  private generateData = (): any[] => {
    let data = new Array();

    let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne"];
    let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
    let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager", "Sales Representative", "Sales Representative", "Inside Sales Coordinator", "Sales Representative"];

    let k = 0;
    for (let i = 0; i < firstNames.length; i++) {
      let row = {};
      row["firstname"] = firstNames[k];
      row["lastname"] = lastNames[k];
      row["title"] = titles[k];
      data[i] = row;
      k++;
    }

    return data;
  };

  private source: any = {
    localData: this.generateData(),
    datafields: [
      { name: 'firstname', type: 'string' },
      { name: 'lastname', type: 'string' },
      { name: 'title', type: 'string' }
    ],
    dataType: "array"
  };

  private dataAdapter: any = new jqx.dataAdapter(this.source);

  private columns: any[] = [
    { text: 'First Name', dataField: 'firstname', width: '30%' },
    { text: 'Last Name', dataField: 'lastname', width: '30%' },
    { text: 'Title', dataField: 'title' }
  ];

  private settingsDatatable = {
    theme: 'material',
    width: '100%',
    height: '100%',
    source: this.dataAdapter,
    sortable: true,
    columns: this.columns
  };

  /**
   * 
   * @param selectorID ID name of the jqxDataTable container
   * @param theme theme for the jqxDataTable (Default theme)
   */
  public createDatatable(selectorID: string, theme?: string) {
    theme = theme || 'material';
    this.settingsDatatable.theme = theme;
    let datatable = jqwidgets.createInstance('#jqxDataTable', 'jqxDataTable', this.settingsDatatable);
  }
}
