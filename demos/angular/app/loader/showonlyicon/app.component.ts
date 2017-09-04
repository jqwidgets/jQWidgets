import { Component, ViewChild } from '@angular/core';

import { jqxLoaderComponent } from '../../../jqwidgets-ts/angular_jqxloader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

    openLoaderClick(event: any): void {
        this.jqxLoader.open();
    };

    closeLoaderClick(event: any): void {
        this.jqxLoader.close();
    };
}