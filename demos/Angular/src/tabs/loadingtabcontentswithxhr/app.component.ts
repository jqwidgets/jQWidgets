import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTabs', { static: false }) jqxTabs: jqxTabsComponent;

    ngAfterViewInit() {
        this.loadPage('./src/app/pages/content1.htm', 1);
    }
	
 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    loadPage = (url, tabIndex) => {
        let request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.setRequestHeader('Content-Type', 'text/json');
        request.send(null);

        // Add "setTimeout" to slow down the request otherwise cannot see "ajax-loader.gif"
        setTimeout(() => {
            document.getElementById('content' + tabIndex).innerText = request.response;
        }, 500);
    }

    tabclick(event: any): void {
        let pageIndex = event.args.item + 1;
        this.loadPage('./src/app/pages/content' + pageIndex + '.htm', pageIndex);
    };    
}