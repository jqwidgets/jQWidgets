import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxBarGaugeComponent } from '../../../jqwidgets-ts/angular_jqxbargauge';
import { jqxListBoxComponent } from '../../../jqwidgets-ts/angular_jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myBarGauge') myBarGauge: jqxBarGaugeComponent;
    @ViewChild('myListBox') myListBox: jqxListBoxComponent;

    ngAfterViewInit(): void {
        this.myListBox.checkIndex(2);
        this.myListBox.checkIndex(5);
        this.myListBox.checkIndex(6);    
    }

    data: any[] = [{
        'id': '1',
        'name': 'Hot Chocolate',
        'calories': '370'
    }, {
        'id': '2',
        'name': 'Peppermint Hot Chocolate',
        'calories': '440'
    }, {
        'id': '3',
        'name': 'Salted Caramel Hot Chocolate',
        'calories': '450'
    }, {
        'id': '4',
        'name': 'White Hot Chocolate',
        'calories': '420'
    }, {
        'id': '5',
        'name': 'Caffe Americano',
        'calories': '15'
    }, {
        'id': '6',
        'name': 'Caffe Latte',
        'calories': '190'
    }, {
        'id': '7',
        'name': 'Caffe Mocha',
        'calories': '330'
    }];

    source: any = {
        datatype: 'json',
        datafields: [
            { name: 'name' },
            { name: 'calories', type: 'int' }
        ],
        id: 'id',
        localdata: this.data
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    tooltip: any = {
        visible: true,
        formatFunction: (value: string, index: number) => {
            let items = this.myListBox.getCheckedItems();
            let item = items[index];
            return item.label + ': ' + value + ' cal.';
        }
    }

    labels: any = {
        formatFunction: (value: string) => {
            return value + ' cal.';
        },
        precision: 0,
        indent: 15,
        connectorWidth: 1
    };
    
    getSum(array: any[]): number {
        array = array || [];
        let sum = 0;
        if (!!array.length) {
            for (let i = 0; i < array.length; i += 1) {
                sum += array[i];
            }
        }
        return sum;
    }

    convertToArray(items: any[]): number[] {
        let preparedArray = new Array(items.length);
        for (let i = 0; i < items.length; i += 1) {
            preparedArray[i] = items[i].value;
        }
        return preparedArray;
    }

    onCheckChange(): void {
        let items = this.myListBox.getCheckedItems();
        let arrayOfItems = this.convertToArray(items);
        let log = document.getElementById('log');
        log.innerHTML = '<strong>Summary calories: ' + this.getSum(arrayOfItems) + '</strong>';
        this.myBarGauge.values(arrayOfItems);
    }
}