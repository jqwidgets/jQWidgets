import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from '../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;

    ngAfterViewInit() {
        this.loadPage('./src/app/pages/content1.htm', 1);
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