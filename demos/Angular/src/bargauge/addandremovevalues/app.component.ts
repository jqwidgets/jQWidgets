import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myBarGauge', { static: false }) myBarGauge: jqxBarGaugeComponent;
    @ViewChild('myListBox', { static: false }) myListBox: jqxListBoxComponent;

    public title: jqwidgets.BarGaugeTitle = {
        text: 'Nutritional Values',
        font: {
            size: 40
        },
        verticalAlignment: 'top',
        margin: {
            bottom: 0,
            top: 0,
            left: 0,
            right: 0
        },
        subtitle: {
            text: '',
            font: {
                size: 20
            }
        }
    };
	
    public source: any = {
      datatype: 'json',
      datafields: [
        { name: 'name' },
        { name: 'calories', type: 'int' }
      ],
      id: 'id',
      localdata: [
        {
          id: '1',
          name: 'Hot Chocolate',
          calories: '370'
        }, {
          id: '2',
          name: 'Peppermint Hot Chocolate',
          calories: '440'
        }, {
          id: '3',
          name: 'Salted Caramel Hot Chocolate',
          calories: '450'
        }, {
          id: '4',
          name: 'White Hot Chocolate',
          calories: '420'
        }, {
          id: '5',
          name: 'Caffe Americano',
          calories: '15'
        }, {
          id: '6',
          name: 'Caffe Latte',
          calories: '190'
        }, {
          id: '7',
          name: 'Caffe Mocha',
          calories: '330'
        }
      ]
    };

    public dataAdapter: any = new jqx.dataAdapter(this.source);

    public tooltip: jqwidgets.BarGaugeTooltip = {
      visible: true,
      formatFunction: (value: string, index: number) => {
        const items = this.myListBox.getCheckedItems();

        return items[index].label + ': ' + value + ' cal.';
      }
    };

    public labels: jqwidgets.BarGaugeLabels = {
      formatFunction: (value: number): string => {
          return value + ' cal.';
      },
      precision: 0,
      indent: 15,
      connectorWidth: 1
    };

    public ngAfterViewInit(): void {
        this.myListBox.checkIndex(2);
        this.myListBox.checkIndex(5);
        this.myListBox.checkIndex(6);
    }

    private getSum(array: number[]): number {
      let sum = 0;

      for (const item of array) {
          sum += item;
      }

      return sum;
    }

    private convertToArray(items: any[]): number[] {
      const preparedArray = [];

      for (let i = 0; i < items.length; i += 1) {
          preparedArray[i] = items[i].value;
      }

      return preparedArray;
    }

    public onCheckChange(): void {
      const items = this.myListBox.getCheckedItems();
      const arrayOfItems = this.convertToArray(items);
      const log = document.getElementById('log');

      log.innerHTML = '<strong>Summary calories: ' + this.getSum(arrayOfItems) + '</strong>';

      this.myBarGauge.values(arrayOfItems);
    }

}
