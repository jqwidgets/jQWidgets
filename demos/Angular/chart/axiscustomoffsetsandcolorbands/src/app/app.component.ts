import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: "a",
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        labels: {
            visible: 'custom', // show only custom labels. Change to true to show all labels or false to hide all
            custom: [{ value: 10 }, { value: 20 }, { value: 'custom label at offset 100', offset: 100 }], // an array of items representing custom labels
            // if the item has an offset property, the item is rendered at that offset, otherwise the value is mapped to an offset
            // corresponding to its position on the axis scale. If an item has both a value and an offset property, the value
            // property is not mappped to an offset, and instead it's just used to display the label
            // the format function shows how to format the labels before they are displayed
            formatFunction: (value) => {
                return "{" + value + "}";
            }
        },
        gridLines:
        {
            visible: 'custom', // show only custom grid lines. Change to true to show all grid lines or false to hide all
            custom: [{ value: 10 }, { value: 20 }, { offset: 100 }]
        },
        tickMarks:
        {
            visible: 'custom', // show only custom tick marks. Change to true to show all tick marks or false to hide all
            custom: [{ value: 10 }, { value: 20 }, { offset: 100 }]
        },
        flip: true
    };

    valueAxis: any =
    {
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        title: { text: "Value" },
        labels: {
            visible: true,
            horizontalAlignment: "right",
            custom: [{ value: 10 }, { value: 20 }, { offset: 90, value: 'custom' }]
        },
        gridLines: {
            custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
        },
        tickMarks: {
            custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
        },
        flip: false
    };

    seriesGroups: any[] =
    [
        {
            type: "scatter",
            series: [
                { dataField: "a", displayText: "A", symbolType: "diamond", symbolSize: 10 },
                { dataField: "b", displayText: "B", symbolType: "triangle_up", symbolSize: 10 }
            ],
            bands: [{ from: 64, to: 256, color: 'red', opacity: 0.2 }]
        }
    ];
}
