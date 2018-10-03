import { Component, ViewEncapsulation } from '@angular/core';
import { AddComponentService } from './add-component.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    constructor(private componentCenter: AddComponentService) {      
    }

    initTabContent = (tab: number) => {
        let theme = 'material';

        switch (tab) {
            case 0:
                this.componentCenter.createBillingForm('billing', theme);
                break;

            case 1:
                this.componentCenter.createChart('jqxChart');
                break;

            case 2:                
                this.componentCenter.createDatatable('jqxDataTable', theme);
                break;
        }
    };
}
