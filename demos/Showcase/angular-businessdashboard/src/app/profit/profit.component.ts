import { Component, AfterViewInit, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
    selector: 'app-profit',
    templateUrl: './profit.component.html',
    styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements AfterViewInit {

    constructor(private sharedService: SharedService) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setHeight();
    }

    ngAfterViewInit() {
        this.setHeight();
    }

    setHeight() {
        if (this.sharedService.mainSplitter.orientation() === 'vertical') {
            this.sharedService.mainSplitter.height(Math.max(979, window.screen.height));
        } else {
            this.sharedService.mainSplitter.height(1102);
            this.sharedService.mainSplitter.panels([{ size: 113 }, { size: 989 }]);
        }
    }
}

