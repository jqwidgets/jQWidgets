import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    ngAfterViewInit(): void {
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
		localData: [
			{ Name: 'Zavier Vargas', Income: 59039, Expenses: 13303, Debt: 15000 },
			{ Name: 'Mark Beasley', Income: 22468, Expenses: 7600, Debt: 0 },
			{ Name: 'Skyla Khan', Income: 111459, Expenses: 101009, Debt: 7300 },
			{ Name: 'Deandre Weber', Income: 28233, Expenses: 31045, Debt: 21000 },
			{ Name: 'Isla Doyle', Income: 92030, Expenses: 90581, Debt: 160000 },
			{ Name: 'Jaslyn Barron', Income: 112083, Expenses: 100322, Debt: 43500 },
			{ Name: 'Monserrat Mccann', Income: 92510, Expenses: 28345, Debt: 17890 },
			{ Name: 'Britney Fuller', Income: 55091, Expenses: 55020, Debt: 31000 },
			{ Name: 'Bernard Munoz', Income: 10030, Expenses: 43012, Debt: 30000 },
			{ Name: 'Sherlyn Vincent', Income: 81209, Expenses: 14390, Debt: 3000 }
		],
		dataFields: [{
			name: 'Name',
			type: 'string'
		}, {
			name: 'Income',
			type: 'number'
		}, {
			name: 'Expenses',
			type: 'number'
		}, {
			name: 'Debt',
			type: 'number'
		}],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
		{ text: 'Name', dataField: 'Name', width: '25%'},
		{ text: 'Income (2020)', dataField: 'Income', cellsFormat: 'c0', width: '25%' },
		{ text: 'Expenses (2020)', dataField: 'Expenses', cellsFormat: 'c0', width: '25%' },
		{ text: 'Remaining Debt', dataField: 'Debt', cellsFormat: 'c0' }
    ];


    myGridRenderToolbar(toolbarHost: any): void {
		const grid: any = this;
		const toolbar = toolbarHost[0];
		
		toolbar.innerHTML = `<div id="toolbar">
            <div id="column">Column</div>
            <div id="line">Line</div>
            <div id="pie">Pie</div>
            <div id="bar">Bar</div>
            <div id="area">Area</div>
            <div id="scatter">Scatter</div>
        </div>`;	
		
		toolbar.querySelector('#column').addEventListener('click', function () {
			grid.createChart('column');
		});
		toolbar.querySelector('#line').addEventListener('click', function () {
			grid.createChart('line');
		});
		toolbar.querySelector('#pie').addEventListener('click', function () {
			grid.createChart('pie');
		});
		toolbar.querySelector('#bar').addEventListener('click', function () {
			grid.createChart('bar');
		});
		toolbar.querySelector('#area').addEventListener('click', function () {
			grid.createChart('area');
		});
		toolbar.querySelector('#scatter').addEventListener('click', function () {
			grid.createChart('scatter');
		});  
    };
}