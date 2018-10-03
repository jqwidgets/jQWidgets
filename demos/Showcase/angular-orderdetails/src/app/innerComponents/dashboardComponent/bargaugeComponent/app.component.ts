import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'barGaugeTarget',
	templateUrl: './app.component.html'
})

export class BarGaugeTarget {
	constructor(public http: Http) {
		let test: any = 'Bar Gauge';
		console.log('bar Gauge', test);
				
		
		// let chartResponse;
        // let t = this.http.get('./app/assets/sampledata/data.txt');
		
		// console.log(t);
		
            // .map(res => res.json())
            // .subscribe(
				// data => chartResponse = data,
				// err => console.log(err),
				// () => {
					// //let data = chartResponse.data;
					// console.log(200, chartResponse);
					
					// // Prepare the DataAdapter for the Calories Chart
					// // let chartSource = {
						// // datatype: "json",
						// // datafields: [
							// // { name: 'date', type: 'date', format: 'dd/MM/yyyy' },
							// // { name: 'intake', type: 'number' },
							// // { name: 'burn', type: 'number' },
							// // { name: 'set', type: 'bool' }
						// // ],
						// // localdata: data
					// // };					
					// // let chartDataAdapter: any = new jqx.dataAdapter(chartSource);
					// // this.chartCalories.setDataAdapter(chartDataAdapter);
				// }
            // );
	}
}