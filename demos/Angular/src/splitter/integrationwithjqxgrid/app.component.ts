import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxgrid', { static: false }) jqxgrid: jqxGridComponent;
    @ViewChild('CompanyName', { static: false }) CompanyName: jqxInputComponent;
    @ViewChild('ContactName', { static: false }) ContactName: jqxInputComponent;
    @ViewChild('ContactTitle', { static: false }) ContactTitle: jqxInputComponent;
    @ViewChild('City', { static: false }) City: jqxInputComponent;
    @ViewChild('Country', { static: false }) Country: jqxInputComponent;
 	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

   
    data: string = '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';
    // prepare the data
    source: any =
    {
        datatype: "json",
        datafields: [
            { name: 'CompanyName', type: 'string' },
            { name: 'ContactName', type: 'string' },
            { name: 'ContactTitle', type: 'string' },
            { name: 'Address', type: 'string' },
            { name: 'City', type: 'string' },
            { name: 'Country', type: 'string' }
        ],
        localdata: this.data,
        updaterow: (rowid, rowdata, commit): void => {
            commit(true);
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'Contact Name', datafield: 'ContactName', width: 150 },
        { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ];

    rowselect(event: any): void {
        // event arguments.
        let args = event.args;
        // selected row.
        let row = event.args.row;
        // update inputs.
        this.CompanyName.val(row.CompanyName);
        this.ContactName.val(row.ContactName);
        this.ContactTitle.val(row.ContactTitle);
        this.City.val(row.City);
        this.Country.val(row.Country);
    }; 

    saveClick(): void {
        let row = this.jqxgrid.getselectedrowindex();
        let rowid = this.jqxgrid.getrowid(row);
        let data = {
            CompanyName: this.CompanyName.val(),
            ContactName: this.ContactName.val(),
            ContactTitle: this.ContactTitle.val(),
            City: this.City.val(),
            Country: this.Country.val()
        };
        this.jqxgrid.updaterow(rowid, data);
    };

    expanded(event: any): void {
        this.jqxgrid.refresh();
    };
}