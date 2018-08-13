import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxDropDownListComponent } from '../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
    @ViewChild('select') select: ElementRef;

    updating: boolean = false;
    selectElement: HTMLSelectElement;

    ngAfterViewInit(): void {
        this.myDropDownList.loadFromSelect('select');
        this.selectElement = this.select.nativeElement;

        this.selectElement.addEventListener('change', (event: any) => {
            this.updating = true;
            let index = this.selectElement.selectedIndex;
            this.myDropDownList.selectIndex(index);
            this.myDropDownList.ensureVisible(index);
            this.updating = false;
        });
    }

    listOnSelect(event: any): void {
        if (event.args && !this.updating) {
            let index = event.args.item.index;
            this.selectElement.selectedIndex = index;
        }
    };
}

