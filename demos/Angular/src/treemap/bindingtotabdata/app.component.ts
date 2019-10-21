import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any = {
        datatype: "tab",
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: './../../../sampledata/homeprices.txt'
    };

    // create data adapter.
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    renderCallbacks: any =
    {
        '*': (element, data) => {
            let content = '<div><div style="font-weight: bold; font-family: verdana; font-size: 13px;">Year: ' + data.record.Year + '</div>';
            content += '<div style=" font-family: verdana; font-size: 12px;">HPI: ' + data.record.HPI + '</div>';
            content += '<div style=" font-family: verdana; font-size: 12px;">Build Cost: ' + data.record.BuildCost + '</div>';
            content += '<div style=" font-family: verdana; font-size: 12px;">Population: ' + data.record.Population + '</div>';
            content += '<div style=" font-family: verdana; font-size: 12px;">Interest Rate: ' + data.record.Rate + '</div>';
            content += '</div>';
            element.jqxTooltip({
                content: content,
                position: 'mouse',
                autoHideDelay: 6000
            });
        }
    };

    colorRanges: any = [
        { min: 0.02, max: 0.03, color: '#ff0300' },
        { min: 0.03, max: 0.04, color: '#fe2e00' },
        { min: 0.04, max: 0.05, color: '#fe3900' },
        { min: 0.05, max: 0.06, color: '#ff5400' },
        { min: 0.06, max: 0.07, color: '#fe7500' },
        { min: 0.07, max: 0.08, color: '#fe8200' },
        { min: 0.08, max: 0.09, color: '#ffed00' },
        { min: 0.09, max: 0.1, color: '#b8db00' },
        { min: 0.1, max: 0.11, color: '#7fbf00' },
        { min: 0.11, max: 0.12, color: '#50a600' },
        { min: 0.12, max: 0.15, color: '#008000' }
    ];
}