import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    ngAfterViewInit(): void {
        this.myChart.enableAnimations(false);
    }

    data: any[] = [
        { year: 2004, price: 0.1437 },
        { year: 2005, price: 0.1470 },
        { year: 2006, price: 0.1510 },
        { year: 2007, price: 0.1605 },
        { year: 2008, price: 0.1647 },
        { year: 2009, price: 0.1736 },
        { year: 2010, price: 0.1766 },
        { year: 2011, price: 0.1902 },
        { year: 2012, price: 0.1978 },
        { year: 2013, price: 0.2113 },
        { year: 2014, price: 0.2178 }
    ];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    padding: any = { left: 5, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        padding: { top: 0, bottom: 0 },
        labels: { angle: 0 },
        dataField: 'year',
        displayText: 'Year',
        valuesOnTicks: false,
        gridLines: { color: '#CDCDCD' },
        tickMarks: { color: '#CDCDCD' }
    };

    valueAxis: any =
    {
        position: 'right',
        padding: { left: 0, right: 0 },
        title: { text: '<br><br>Price EUR / kWh' },
        labels: {
            visible: true,
            angle: 0,
            formatSettings: { decimalPlaces: 4, sufix: ' €' }
        },
        tickMarks: {
            visible: true,
            color: '#CDCDCD',
            size: 5
        },
        gridLines: {
            visible: true,
            color: '#CDCDCD',
        },
        alternatingBackgroundColor: '#EFEFEF',
        alternatingBackgroundColor2: '#CECECE',
        alternatingBackgroundOpacity: 0.2
    };

    seriesGroups: any[] =
    [
        {
            type: 'stepline',
            series: [
                { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', showLabels: true, symbolType: 'circle' }
            ]
        }
    ];

    sliderValueAxisLeftPaddingOnChange(event: any): void {
        this.myChart.valueAxis().padding.left = event.args.value;
        this.myChart.refresh();
    }

    sliderValueAxisRightPaddingOnChange(event: any): void {
        this.myChart.valueAxis().padding.right = event.args.value;
        this.myChart.refresh();
    }

    sliderValueAxisAngleOnChange(event: any): void {
        this.myChart.valueAxis().labels.angle = event.args.value;
        this.myChart.refresh();
    }

    sliderXAxisTopPaddingOnChange(event: any): void {
        this.myChart.xAxis().padding.top = event.args.value;
        this.myChart.refresh();
    }

    sliderXAxisBottomPaddingOnChange(event: any): void {
        this.myChart.xAxis().padding.bottom = event.args.value;
        this.myChart.refresh();
    }

    sliderXAxisAngleOnChange(event: any): void {
        this.myChart.xAxis().labels.angle = event.args.value;
        this.myChart.refresh();
    }

    btnLeftOnChange(event: any): void {
        if (event.args.checked) {
            this.myChart.valueAxis().position = 'left';
            this.myChart.refresh();
        }
    }

    btnRightOnChange(event: any): void {
        if (event.args.checked && this.myChart) {
            this.myChart.valueAxis().position = 'right';
            this.myChart.refresh();
        }
    }

    btnTopOnChange(event: any): void {
        if (event.args.checked) {
            this.myChart.xAxis().position = 'top';
            this.myChart.refresh();
        }
    }

    btnBottomOnChange(event: any): void {
        if (event.args.checked && this.myChart) {
            this.myChart.xAxis().position = 'bottom';
            this.myChart.refresh();
        }
    }

    btnValueAxisFlipOnChange(event: any): void {
        this.myChart.valueAxis().flip = event.args.checked;
        this.myChart.refresh();
    }

    btnXAxisFlipOnChange(event: any): void {
        this.myChart.xAxis().flip = event.args.checked;
        this.myChart.refresh();
    }
}
