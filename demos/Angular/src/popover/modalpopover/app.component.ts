import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('employees', { static: false }) employees: ElementRef;
    
    ngAfterViewInit() {
        let data = new Array();
        let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
        
        for (let i = 0; i < firstNames.length; i++) {
            let row = {};
            row['firstname'] = firstNames[i];
            row['lastname'] = lastNames[i];
            row['title'] = titles[i];
            let imgurl = './../../../images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="45" src="' + imgurl + '"/>';
            let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            this.employees.nativeElement.innerHTML += table;
        }
    }
}