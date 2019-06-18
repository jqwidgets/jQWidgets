import { Component, ViewChild } from '@angular/core';

import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader', {static: false}) jqxLoader: jqxLoaderComponent;

    openLoaderClick(event: any): void {
        this.jqxLoader.open();
    };
}