import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data: any[] = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];
    
 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    source: any =
    {
        localdata: this.data,
        datatype: "array",
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);    
}