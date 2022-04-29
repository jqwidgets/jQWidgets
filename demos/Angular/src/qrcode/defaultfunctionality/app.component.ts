import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: []
})

export class AppComponent implements AfterViewInit  {   
	 ngAfterViewInit(): void {

     }
}
