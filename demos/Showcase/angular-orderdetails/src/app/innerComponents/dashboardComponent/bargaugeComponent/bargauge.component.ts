import { Component, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ItemsEnumeration } from '../../../items.enum';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';

import { InfoService } from '../../../services/info.service';

@Component({
    selector: 'barGaugeTarget',
    templateUrl: './bargauge.component.html'
})

export class BarGaugeTarget {
    @ViewChild('bargaugeReference') bargauge: jqxBarGaugeComponent;
    @ViewChild('listContainer') listContainer: ElementRef;

    constructor(private _dataServices: DataService, private InfoService: InfoService) {
        this._dataServices.getItemData(this.enumItems.targetbargauge)
            .then(result => {
                let values = [];
                for (let i = 0; i < result.length; i++) {
                    let item = result[i];
                    values.push(item.value);
                    this.itemsInformation.push({ item: item.description, color: this.itemsBGColors[i] });
                }

                this.bargauge.values(values);
                this.InfoService.setItemsData(this.itemsInformation);
            })
            .catch(error => {
                console.log("Error with 'BarGaugeTarget'", error);
            });
    }

    private enumItems = new ItemsEnumeration();
    private itemsBGColors = ["#F1495B", "#4d5866", "#888D94"];
    private itemsInformation = [];
}