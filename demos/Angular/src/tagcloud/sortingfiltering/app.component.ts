import { Component, ViewChild } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('tagCloud', { static: false }) tagCloud: jqxTagCloudComponent;
    @ViewChild('sortByListBox', { static: false }) sortByListBox: jqxDropDownListComponent;
    @ViewChild('sortDirectionListBox', { static: false }) sortDirectionListBox: jqxDropDownListComponent;
    @ViewChild('minValueListBox', { static: false }) minValueListBox: jqxDropDownListComponent;
    @ViewChild('maxTagsListBox', { static: false }) maxTagsListBox: jqxDropDownListComponent;
    
    width: number = 200;
    height: number = 25;

 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    unemploymentRate: any[] = [
        { "country": "Namibia", "rate": 37.6 },
        { "country": "Macedonia, FYR", "rate": 32.0 },
        { "country": "Latvia", "rate": 18.7 },
        { "country": "Lithuania", "rate": 17.8 },
        { "country": "Estonia", "rate": 16.9 },
        { "country": "Serbia", "rate": 16.6 },
        { "country": "Georgia", "rate": 16.5 },
        { "country": "Yemen, Rep.", "rate": 14.6 },
        { "country": "Slovak Republic", "rate": 14.4 },
        { "country": "Dominican Republic", "rate": 14.2 },
        { "country": "Tunisia", "rate": 14.2 },
        { "country": "Armenia", "rate": 28.6 },
        { "country": "Bosnia and Herzegovina", "rate": 27.2 },
        { "country": "Lesotho", "rate": 25.3 },
        { "country": "South Africa", "rate": 24.7 },
        { "country": "Spain", "rate": 20.1 },
        { "country": "Albania", "rate": 13.8 },
        { "country": "Ireland", "rate": 13.6 },
        { "country": "Jordan", "rate": 12.9 },
        { "country": "Greece", "rate": 12.5 }
    ];
    source: any =
    {
        datatype: "array",
        localdata: this.unemploymentRate,
        datafields: [
            { name: 'country' },
            { name: 'rate' }
        ]
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    hideItemClick(): void {
        let records = this.tagCloud.getTagsList();
        let hiddenTagsList = this.tagCloud.getHiddenTagsList();
        for (let i = 0; i < records.length; i++) {
            if (hiddenTagsList.indexOf(records[i].index) == -1) {
                this.tagCloud.hideItem(records[i].index);
                return;
            }
        }
    };

    sortByListBoxSelect(event: any): void {
        let args = event.args;
        let item = this.sortByListBox.getItem(args.index);
        if (item != null) {
            this.tagCloud.sortBy(item.label);
        }
    };

    sortDirectionListBoxSelect(event: any): void {
        let args = event.args;
        let item = this.sortDirectionListBox.getItem(args.index);
        if (item != null) {
            this.tagCloud.sortOrder(item.label);
        }
    };

    minValueListBoxSelect(event: any): void {
        let args = event.args;
        let item: any = this.minValueListBox.getItem(args.index);
        if (item != null) {
            this.tagCloud.minValueToDisplay(item.label);
        }
    };

    maxTagsListBoxSelect(event: any): void {
        let args = event.args;
        let item: any = this.maxTagsListBox.getItem(args.index);
        if (item != null) {
            if (item.label == 0) {
                this.tagCloud.displayLimit(null);
            } else {
                this.tagCloud.displayLimit(item.label);
            }
        }
    };

    displayTagValueCheckboxChange(event: any): void {
        let checked = event.args.checked;
        this.tagCloud.displayValue(checked);
    };

    takeTopWeightedItemsChange(event: any): void {
        let checked = event.args.checked;
        this.tagCloud.takeTopWeightedItems(checked);
    };
}