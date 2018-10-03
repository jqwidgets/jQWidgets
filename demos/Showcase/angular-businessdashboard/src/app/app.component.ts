import { Component, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared-service';
import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    documentWidth: number;
    listContainerRight: boolean;
    showFreeSpace: boolean;
    collapsedListContainer: boolean;

    @ViewChild('mainSplitter') mainSplitter: jqxSplitterComponent;

    constructor(private sharedService: SharedService) {}

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.showFreeSpace = false;
        this.collapsedListContainer = false;

        this.documentWidth = window.innerWidth;
        if (this.documentWidth < 979) {
            this.mainSplitter.orientation('horizontal');
            this.listContainerRight = true;
        } else {
            this.mainSplitter.orientation('vertical');
            this.mainSplitter.panels([{ size: 250 }, { size: '87%' }]);
            this.listContainerRight = false;
        }       
    }

    ngAfterViewInit() {
        this.sharedService.mainSplitter = this.mainSplitter;
        this.documentWidth = window.innerWidth;
        if (this.documentWidth < 979) {
            this.mainSplitter.orientation('horizontal');
            setTimeout(() => {
                this.listContainerRight = true;
            });
        }
    }

    hiddenDesktopClick() {
        let panels = this.mainSplitter.panels();
        let height = this.mainSplitter.height();
        let newHeight;
        let temp;

        if (panels[0].size === "'13%'" || panels[0].size === 113) {
            newHeight = height + 160;
            this.mainSplitter.height(newHeight);
            temp = newHeight - 273;
            this.mainSplitter.panels([{ size: 273 }, { size: temp }]);
            this.showFreeSpace = true;
            this.collapsedListContainer = true;
        } else {
            newHeight = height - 160;
            this.mainSplitter.height(newHeight);
            temp = newHeight - 113;
            this.mainSplitter.panels([{ size: 113 }, { size: temp }]);
            this.showFreeSpace = false;
            this.collapsedListContainer = false;
        }

    }

}
