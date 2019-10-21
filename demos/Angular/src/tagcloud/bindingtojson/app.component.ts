import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent  {    
    url: string = './../../../sampledata/beverages.txt';
    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'calories' },
            { name: 'name' }
        ],
        url: this.url
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
	
 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}	
}