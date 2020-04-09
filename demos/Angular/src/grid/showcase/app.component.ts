import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
        localdata: [{
			axe: null,
			exp: null,
			status: true,
			time: "11:57:17",
			date: "2020-10-10",
			source: 3,
			clientname: "DSK BANK IN LIECHTENSTEIN",
			leg: "M",
			condition: "SELL",
			ticker: "",
			size: 1000000,
			id: "5D9F0E7BBE",
			description: "LLOYD3"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "15:29:11",
			date: "2020-10-10",
			source: 6,
			clientname: "BANQUE JACOB PETERSON (MONACO) SA",
			leg: "M",
			condition: "BUY",
			ticker: "",
			size: 1000000,
			id: "5D9F4027BE",
			description: "HSBC"
		},
		{
			axe: null,
			exp: null,
			status: true,
			time: "15:57:23",
			date: "2020-10-10",
			source: 4,
			clientname: "CREDIT SUISSE PB ZURICH",
			leg: "M",
			condition: "SELL",
			ticker: "SOCGEN",
			size: 1000000,
			id: "5D9F46C4C0",
			description: "SOCGEN"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "20:05:21",
			date: "2020-10-10",
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "M",
			condition: "SELL",
			ticker: "",
			size: 1,
			id: "46769596",
			description: "HSBC"
		},
		{
			axe: null,
			exp: null,
			status: null,
			time: null,
			date: null,
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "L1",
			condition: "SELL",
			ticker: "",
			size: 1000000,
			id: null,
			description: "T 2.875"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "20:05:21",
			date: "2020-10-10",
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "M",
			condition: "SELL",
			ticker: "",
			size: 1000000,
			id: "46769599",
			description: "BHP 5."
		},
		{
			axe: null,
			exp: null,
			status: null,
			time: null,
			date: null,
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "L1",
			condition: "SELL",
			ticker: "",
			size: 1000000,
			id: null,
			description: "T 2.875"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "20:05:21",
			date: "2020-10-10",
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "M",
			condition: "BUY",
			ticker: "",
			size: 1,
			id: "46769605",
			description: "RIOLN"
		},
		{
			axe: null,
			exp: null,
			status: null,
			time: null,
			date: null,
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "L1",
			condition: "BUY",
			ticker: "",
			size: 1000000,
			id: null,
			description: "T 2.875"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "20:05:21",
			date: "2020-10-10",
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "M",
			condition: "SELL",
			ticker: "",
			size: 1,
			id: "46769612",
			description: "RBS 6."
		},
		{
			axe: null,
			exp: null,
			status: null,
			time: null,
			date: null,
			source: 4,
			clientname: "MARKET BD HOLDINGS INC",
			leg: "L1",
			condition: "SELL",
			ticker: "",
			size: 1000000,
			id: null,
			description: "T 1.500"
		},
		{
			axe: null,
			exp: null,
			status: false,
			time: "20:06:15",
			date: "2020-10-10",
			source: 4,
			clientname: "NEW SERVICE CAPITAL, LLC",
			leg: "M",
			condition: "BUY",
			ticker: "",
			size: 1,
			id: "46769754",
			description: "HSBC"
		},
		],
        datatype: 'array',
		beforeLoadComplete: function(records) {
			for (const key in records) {
				let record = records[key];
				if (record.status == null) {
					record.status_metadata = "null";
				} 
				else {
					record.status_metadata = record.status;
				}
			}
			return records;
		},
        datafields:
        [
			{ name: "axe" },
			{ name: "exp", type: "string" },
			{ name: "status", type: "bool" },
			{ name: "status_metadata", type: "string" },
			{ name: "time", type: "date", format: "HH:mm:ss" },
			{ name: "date", type: "date", format: "yyyy-MM-dd" },
			{ name: "source", type: "number" },
			{ name: "clientname", type: "string" },
			{ name: "leg", type: "string" },
			{ name: "condition", type: "string" },
			{ name: "ticker", type: "string" },
			{ name: "size", type: "number" },
			{ name: "id", type: "string" },
			{ name: "description", type: "string" }
        ]
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

	renderStatusBar: any = function(statusbar) {
		let container = $("<div style='margin: 5px;'></div>");
		let leftResult = "24 Items";
		let nextToLeftResult = "0 Selected";
		let rightResult = "114.4 Size";
		let leftSpan = $(`<span style='float: left; margin-top: 5px; margin-left: 18px;'>${leftResult}</span>`);
		let nextToLeftSpan = $(`<span style='float: left; margin-top: 5px; margin-left: 18px;'>${nextToLeftResult}</span>`);
		let rightSpan = $(`<span style='float: right; margin-top: 5px; margin-right: 45px;'>${rightResult}</span>`);
		container.append(leftSpan);
		container.append(nextToLeftSpan);
		container.append(rightSpan);
		statusbar.append(container);
	}
	
	columngroups: any[] = 
	[
		{ text: "Product Details", align: "center", name: "ProductDetails" }
	]
				
    columns: any[] =
	[
		{
			text: "Status",
			datafield: "status",
			width: 140,
			columntype: "button",
			cellclassname: function(row, column, value, data) {
				let result = "booleanvalue";
				switch (data.status_metadata) {
					case true:
						result = "quoteonthewire";
						break;
					case false:
						result = "quoterequested";
						break;
					default:
						break;
				}
				return result;
			},
			cellsrenderer: function(row, columnfield, value, defaulthtml, columnproperties, rowdata) {
				let result = " ";
				switch (rowdata.status_metadata) {
					case true:
						result = "QuoteOnTheWire";
						break;
					case false:
						result = "QuoteRequested";
						break;
					default:
						break;
				}
				return result;
			},
			buttonclick: function(row) {
				console.log("Click:", row);
			}
		},
		{ text: "Time", datafield: "time", width: 100, cellsformat: "HH:mm:ss" },
		{ text: "Date", datafield: "date", width: 100, cellsformat: "yyyy-MM-dd" },
		{ text: "Source", datafield: "source", width: 100 },
		{ text: "Client Name", datafield: "clientname", width: 240, cellclassname: "specialtext" },
		{
			text: "leg #",
			datafield: "leg",
			columntype: "dropdownlist",
			width: 100,
			cellclassname: function(row, column, value, data) {
				if (value === "M") {
					return "description";
				}
				return "";
			}
		},
		{
			text: "C.",
			datafield: "condition",
			columntype: "dropdownlist",
			width: 80,
			cellclassname: function(row, column, value, data) {
				if (value == "SELL") {
					return "sellformat";
				} else if (value === "BUY") {
					return "buyformat";
				}
			}
		},
		{ text: "TICKER", datafield: "ticker", width: 100, cellclassname: "specialtext" },
		{ text: "Size", datafield: "size", width: 100 },
		{ text: "Id", datafield: "id", width: 100 },
		{ text: "Description", datafield: "description",  cellclassname: "description", columntype: "textbox" }
	]
}