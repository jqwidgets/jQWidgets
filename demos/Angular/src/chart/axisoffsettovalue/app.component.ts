import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
	@ViewChild('eventText', { static: false }) eventText: ElementRef;

    sampleData: any[] = [
        { a: 0.1535, b: 0.5 },
        { a: 0.48, b: 20.5 },
        { a: 10, b: 60 },
        { a: 100, b: 80 },
        { a: 200, b: 90 },
        { a: 245.11, b: 100.13 },
        { a: 300.13, b: 150.13 },
        { a: 340, b: 200 }
    ];

    padding: any = { left: 5, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth(): any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'a',
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        valuesOnTicks: true
    };

    valueAxis: any =
    {
        padding: { right: 0 },
        flip: false,
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        title: { text: 'Value' },
        labels: {
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            radius: 200,
            series: [
                { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
            ]
        }
    ];

    cursorRedDotElement: any = null;

    myChartOnMousemove(event: any): void {
        let position = this.cursorPositionRelativeToChart(event);
        // get the xAxis value
        let xvalue = this.myChart.getXAxisValue(position.x, 0);
        // get the valueAxis value
        let yvalue = this.myChart.getValueAxisValue(position.y, 0);
        // prepare event data text
        let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        // display the event data text
        this.eventText.nativeElement.innerHTML = eventData;
        // display a small dot at the cursor position 
        let instance = this.myChart.getInstance();
        let renderer = instance.renderer;
        if (this.cursorRedDotElement)
            renderer.attr(this.cursorRedDotElement, { cx: position.x - 7, cy: position.y - 25 });
        else
            this.cursorRedDotElement = renderer.circle(position.x, position.y, 1, { fill: 'red', stroke: 'red' });
    }

    // add click event handler
    myChartOnClick(event: any): void {
        let position = this.cursorPositionRelativeToChart(event);
        // get the xAxis value
        let xvalue = this.myChart.getXAxisValue(position.x, 0);
        // get the valueAxis value
        let yvalue = this.myChart.getValueAxisValue(position.y, 0);
        // prepare event data text
        let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        alert(eventData);
    };

    cursorPositionRelativeToChart(event: any): any {
        // get the x/y coordinates of the mouse cursor relative to the chart element
        let x = event.pageX || event.clientX || event.screenX;
        let y = event.pageY || event.clientY || event.screenY;

        return { x: x, y: y };
    }
}
