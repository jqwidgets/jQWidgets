import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('eventLog', { static: false }) eventLog: ElementRef;
    
    data = [
        {
            'id': '12',
            'text': 'Frappuccino',
            'parentid': '-1',
            'subMenuWidth': '250px'
        },
        {
            'text': 'Chocolate Beverage',
            'id': '1',
            'parentid': '-1',
            'subMenuWidth': '250px'
        }, {
            'id': '2',
            'parentid': '1',
            'text': 'Hot Chocolate'
        }, {
            'id': '3',
            'parentid': '1',
            'text': 'Peppermint Hot Chocolate'
        }, {
            'id': '4',
            'parentid': '1',
            'text': 'Salted Caramel Hot Chocolate'
        }, {
            'id': '5',
            'parentid': '1',
            'text': 'White Hot Chocolate'
        }, {
            'id': '6',
            'text': 'Espresso Beverage',
            'parentid': '-1',
            'subMenuWidth': '200px'
        }, {
            'id': '7',
            'parentid': '6',
            'text': 'Caffe Americano'
        }, {
            'id': '8',
            'text': 'Caffe Latte',
            'parentid': '6'
        }, {
            'id': '9',
            'text': 'Caffe Mocha',
            'parentid': '6'
        }, {
            'id': '10',
            'text': 'Cappuccino',
            'parentid': '6'
        }, {
            'id': '11',
            'text': 'Pumpkin Spice Latte',
            'parentid': '6'
        }, {
            'id': '13',
            'text': 'Caffe Vanilla Frappuccino',
            'parentid': '12'
        }, {
            'id': '15',
            'text': '450 calories',
            'parentid': '13'
        }, {
            'id': '16',
            'text': '16g fat',
            'parentid': '13'
        }, {
            'id': '17',
            'text': '13g protein',
            'parentid': '13'
        }, {
            'id': '14',
            'text': 'Caffe Vanilla Frappuccino Light',
            'parentid': '12'
        }];

    // prepare the data
    source =
    {
        datatype: 'json',
        datafields: [
            { name: 'id' },
            { name: 'parentid' },
            { name: 'text' },
            { name: 'subMenuWidth' }
        ],
        id: 'id',
        localdata: this.data
    };

    getAdapter(source: any): any {
        // create data adapter and perform data
        return new jqx.dataAdapter(this.source, { autoBind: true });
    };

    records = this.getAdapter(this.source).getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);

    itemclick(event: any): void {
        this.eventLog.nativeElement.innerHTML = 'Id: ' + event.args.id + ', Text: ' + event.args.innerText;
    };
}