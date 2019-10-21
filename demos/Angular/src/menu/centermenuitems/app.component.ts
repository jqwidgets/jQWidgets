import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu', { static: false }) jqxMenu: jqxMenuComponent;
    
    ngAfterViewInit() {
        this.centerItems();
    }

    centerItems(): void {
        let firstItem = this.jqxMenu.elementRef.nativeElement.firstElementChild.children[0].firstElementChild;
        let width = 0;
        let borderOffset = 2;
        let allLiElements = this.jqxMenu.elementRef.nativeElement.firstElementChild.children[0].children;
        for (let i = 0; i < allLiElements.length; i++) {
            let currentLi = allLiElements[i];
            width += currentLi.offsetWidth + borderOffset;
        }
        
        let menuWidth = this.jqxMenu.elementRef.nativeElement.firstElementChild.offsetWidth;
        let calculatedOffset = (menuWidth / 2) - (width / 2);
        firstItem.style.margin = '0 0 0 ' + (calculatedOffset).toString() + 'px';
    }

    onResize(event: any): void {
        let innerWidth = event.target.innerWidth;
        this.centerItems();
    }
}