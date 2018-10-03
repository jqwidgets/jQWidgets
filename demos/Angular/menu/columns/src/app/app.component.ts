import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {    
    ngAfterViewInit() {
        let searchButton: jqwidgets.jqxButton = jqwidgets.createInstance('.jqx-menu-search', 'jqxButton', { theme: 'material', width: 60, height: 18 });
        let linkButton: jqwidgets.jqxLinkButton = jqwidgets.createInstance('.buyonline', 'jqxLinkButton', { theme: 'material', width: 150, height: 25 });
    }
}