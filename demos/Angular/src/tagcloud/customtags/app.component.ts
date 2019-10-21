import { Component, ViewChild } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTagCloud', { static: false }) myTagCloud: jqxTagCloudComponent

	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    data: any[] =
    [
        { countryName: 'Australia', technologyRating: 35, url: 'test' },
        { countryName: 'United States', technologyRating: 60 },
        { countryName: 'Germany', technologyRating: 55 },
        { countryName: 'Brasil', technologyRating: 20 },
        { countryName: 'United Kingdom', technologyRating: 50 },
        { countryName: 'Japan', technologyRating: 80 }
    ];

    source: any =
    {
        localdata: this.data,
        datatype: 'array',
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    tagRenderer = (record: any, minValue: any, range: any): HTMLSpanElement => {
        let el = document.createElement('span');
        el.innerText = record.countryName;

        let img = document.createElement('img');
        img.setAttribute('style', 'width: auto; height: auto; vertical-align: middle;');
        img.src = '../jqwidgets/styles/images/close.png';

        img.addEventListener('click', (): void => {
            let liElements = this.myTagCloud.elementRef.nativeElement.getElementsByTagName('li');

            for (let i = 0; i < liElements.length; i++) {
                if (liElements[i].innerText === (<Element>event.target).parentElement.innerText) {
                    this.myTagCloud.removeAt(i);
                }
            }

            event.preventDefault();
            event.stopPropagation();
        });

        el.appendChild(img);
        return el;
    };
}