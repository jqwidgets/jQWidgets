import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('tagCloud', { static: false }) tagCloud: jqxTagCloudComponent;

    ngAfterViewInit(): void {
        this.tagCloud.hideItem(1);
    }
	
	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    data: any[] = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];
    source: any =
    {
        localdata: this.data,
        datatype: "array",
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
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

    showItemClick(): void {
        let hiddenTagsList = this.tagCloud.getHiddenTagsList();
        if (hiddenTagsList[0] !== undefined) {
            let tagId = hiddenTagsList[0];
            this.tagCloud.showItem(tagId);
        }
    };
}