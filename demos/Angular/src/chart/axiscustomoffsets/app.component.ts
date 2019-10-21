import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('dropDownLabelsVisibility_xAxis', { static: false }) dropDownLabelsVisibility_xAxis: jqxDropDownListComponent;
    @ViewChild('dropDownLabelsVisibility_valueAxis', { static: false }) dropDownLabelsVisibility_valueAxis: jqxDropDownListComponent;
    @ViewChild('inputCustomPosition_xAxis', { static: false }) inputCustomPosition_xAxis: jqxInputComponent;
    @ViewChild('inputCustomPosition_valueAxis', { static: false }) inputCustomPosition_valueAxis: jqxInputComponent;
    @ViewChild('btnRemoveCustomPosition_xAxis', { static: false }) btnRemoveCustomPosition_xAxis: jqxButtonComponent;
    @ViewChild('btnRemoveCustomPosition_valueAxis', { static: false }) btnRemoveCustomPosition_valueAxis: jqxButtonComponent;
    @ViewChild('listboxCustomPositions_xAxis', { static: false }) listboxCustomPositions_xAxis: jqxListBoxComponent;
    @ViewChild('listboxCustomPositions_valueAxis', { static: false }) listboxCustomPositions_valueAxis: jqxListBoxComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
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

    visibilityOptions: any = [true, false, 'custom'];

    padding: any = { left: 5, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'a',
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        labels: {
            visible: true,
            custom: [{ value: 10 }, { value: 20 }]
        },
        gridLines:
        {
            visible: true,
            custom: [{ value: 10 }, { value: 20 }]
        },
        tickMarks:
        {
            visible: true,
            custom: [{ value: 10 }, { value: 20 }]
        },
        flip: false
    };

    valueAxis: any =
    {
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        title: { text: '' },
        labels: {
            horizontalAlignment: 'right',
            custom: [{ value: 10 }, { value: 20 }]
        },
        gridLines: {
            custom: [{ value: 10 }, { value: 20 }]
        },
        tickMarks: {
            custom: [{ value: 10 }, { value: 20 }]
        },
        flip: false
    };

    seriesGroups: any[] =
    [
        {
            type: 'scatter',
            series: [
                { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
            ]
        }
    ];

    dropDownLabelsVisibility_xAxisOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.xAxis().labels.visible = value == 'false' ? false : value;
        this.myChart.xAxis().gridLines.visible = value == 'false' ? false : value;
        this.myChart.xAxis().tickMarks.visible = value == 'false' ? false : value;
        this.myChart.refresh();
    };

    dropDownLabelsVisibility_valueAxisOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.valueAxis().labels.visible = value == 'false' ? false : value;
        this.myChart.valueAxis().gridLines.visible = value == 'false' ? false : value;
        this.myChart.valueAxis().tickMarks.visible = value == 'false' ? false : value;
        this.myChart.refresh();
    };

    btnAddCustomPosition_xAxisOnClick(): void {
        let value = this.inputCustomPosition_xAxis.val();
        if (!isNaN(parseFloat(value))) {
            this.listboxCustomPositions_xAxis.addItem(parseFloat(value));
            let items = this.listboxCustomPositions_xAxis.getItems();
            let customOffsets = [];
            for (let i = 0; i < items.length; i++)
                customOffsets.push({ value: parseFloat(items[i].value) });
            this.myChart.xAxis().labels.custom = customOffsets;
            this.myChart.xAxis().gridLines.custom = customOffsets;
            this.myChart.xAxis().tickMarks.custom = customOffsets;
            this.myChart.refresh();
        }
    };

    btnAddCustomPosition_valueAxisOnClick(): void {
        let value = this.inputCustomPosition_valueAxis.val();
        if (!isNaN(parseFloat(value))) {
            this.listboxCustomPositions_valueAxis.addItem(parseFloat(value));
            let items = this.listboxCustomPositions_valueAxis.getItems();
            let customOffsets = [];
            for (let i = 0; i < items.length; i++)
                customOffsets.push({ value: parseFloat(items[i].value) });
            this.myChart.valueAxis().labels.custom = customOffsets;
            this.myChart.valueAxis().gridLines.custom = customOffsets;
            this.myChart.valueAxis().tickMarks.custom = customOffsets;
            this.myChart.refresh();
        }
    };

    btnRemoveCustomPosition_xAxisOnClick(): void {
        let idx = this.listboxCustomPositions_xAxis.selectedIndex();
        if (idx == -1)
            return;
        this.listboxCustomPositions_xAxis.removeAt(idx);
        let items = this.listboxCustomPositions_xAxis.getItems();
        let customOffsets = [];
        for (let i = 0; i < items.length; i++)
            customOffsets.push({ value: parseFloat(items[i].value) });
        this.myChart.xAxis().labels.custom = customOffsets;
        this.myChart.xAxis().gridLines.custom = customOffsets;
        this.myChart.xAxis().tickMarks.custom = customOffsets;
        this.myChart.refresh();
    };

    btnRemoveCustomPosition_valueAxisOnClick(): void {
        let idx = this.listboxCustomPositions_valueAxis.selectedIndex();
        if (idx == -1)
            return;
        this.listboxCustomPositions_valueAxis.removeAt(idx);
        let items = this.listboxCustomPositions_valueAxis.getItems();
        let customOffsets = [];
        for (let i = 0; i < items.length; i++)
            customOffsets.push({ value: parseFloat(items[i].value) });
        this.myChart.valueAxis().labels.custom = customOffsets;
        this.myChart.valueAxis().gridLines.custom = customOffsets;
        this.myChart.valueAxis().tickMarks.custom = customOffsets;
        this.myChart.refresh();
    };
}
