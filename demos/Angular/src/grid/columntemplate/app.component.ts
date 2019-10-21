import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'title', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'pubDate', type: 'date' },
            { name: 'creator', map: 'dc\\:creator', type: 'string' },
        ],
        root: 'channel',
        record: 'item',
        url: './../../../sampledata/feed.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    linkrenderer = (row: number, column: any, value: any): any => {
        if (value.indexOf('#') != -1) {
            value = value.substring(0, value.indexOf('#'));
        }
        let format = { target: '"_blank"' };
        let html = jqx.dataFormat.formatlink(value, format);
        return html;
    }

    columns: any[] =
    [
        { text: 'Link', datafield: 'link', width: 550, cellsrenderer: this.linkrenderer },
        { text: 'Title', datafield: 'title', width: 200 },
        { text: 'Publish Date', datafield: 'pubDate', width: 250, cellsformat: 'D' },
        { text: 'Creator', datafield: 'creator', width: 200 }
    ];
}