import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	  @ViewChild('eventText', { static: false }) eventText: ElementRef;

    sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Day',
        type: 'basic'
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            valueAxis:
            {
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                title: { text: 'Time in minutes' }
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
            ]
        }
    ];

    chartEvent(event: any): any {
        let eventData;
        if (event) {
            if (event.args) {
                if (event.type == 'toggle') {
                    eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, visible: </b>' + event.args.state + '</div>';
                    return;
                }
                eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, Value: </b>' + event.args.elementValue + '</div>';
            } else {
                eventData = '<div><b>Last Event: </b>' + event.type + '';
            }

            this.eventText.nativeElement.innerHTML = eventData;
        }
    }
}
