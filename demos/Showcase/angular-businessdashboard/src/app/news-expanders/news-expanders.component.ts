import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../../services/shared-service';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';

@Component({
    selector: 'app-news-expanders',
    templateUrl: './news-expanders.component.html',
    styleUrls: ['./news-expanders.component.css']
})
export class NewsExpandersComponent implements AfterViewInit {

    @ViewChild('newsContainer') newsContainer: ElementRef;
    @ViewChild('forumContainer') forumContainer: ElementRef;
    @ViewChild('expander1') expander1: jqxExpanderComponent;
    @ViewChild('expander2') expander2: jqxExpanderComponent;
    @ViewChild('expander3') expander3: jqxExpanderComponent;
    @ViewChild('expander4') expander4: jqxExpanderComponent;
    @ViewChild('expander5') expander5: jqxExpanderComponent;
    @ViewChild('expander6') expander6: jqxExpanderComponent;
    @ViewChild('expander7') expander7: jqxExpanderComponent;
    @ViewChild('expander8') expander8: jqxExpanderComponent;
    @ViewChild('expander9') expander9: jqxExpanderComponent;
    @ViewChild('expander10') expander10: jqxExpanderComponent;

    dropdownId: number = 0;

    hide1: boolean;
    hide2: boolean;
    hide3: boolean;
    hide4: boolean;
    hide5: boolean;
    hide6: boolean;
    hide7: boolean;
    hide8: boolean;
    hide9: boolean;
    hide10: boolean;

    constructor(private sharedService: SharedService) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setHeight();
    }

    ngAfterViewInit() {
        this.setHeight();
    }

    updateExpanders(id: number): void {
        if (this.dropdownId === 0) {
            this.expander1.collapse();
            this.expander2.collapse();
            this.expander3.collapse();
            this.expander4.collapse();
            this.expander5.collapse();
            this.expander6.collapse();
            this.expander7.collapse();
            this.expander8.collapse();
            this.expander9.collapse();
            this.expander10.collapse();
        }
        else if (this.dropdownId === 1) {
            this.expander1.collapse();
            this.expander2.collapse();
            this.expander3.collapse();
            this.expander4.collapse();
            this.expander5.collapse();
        } else {
            this.expander6.collapse();
            this.expander7.collapse();
            this.expander8.collapse();
            this.expander9.collapse();
            this.expander10.collapse();
        }     
        setTimeout(() => {
            this.dropdownId = id;
        },15)
        
        setTimeout(() => {
            this.setHeight();
        }, 20);
    }

    setHeight() {
        let newsHeight = 0;
        let forumHeight = 0;
        if (this.dropdownId === 0 || this.dropdownId === 1) {
            newsHeight = this.newsContainer.nativeElement.offsetHeight;
        }
        if (this.dropdownId === 0 || this.dropdownId === 2) {
            forumHeight = this.forumContainer.nativeElement.offsetHeight;
        }

        let newsContainerHeight = newsHeight + forumHeight + 197;

        if (this.sharedService.mainSplitter.orientation() === 'vertical') {
            this.sharedService.mainSplitter.height(newsContainerHeight);
        } else {
            this.sharedService.mainSplitter.height(newsContainerHeight + 113);
            this.sharedService.mainSplitter.panels([{ size: 113 }, { size: newsContainerHeight }]);
        }
    }

    updatePanel(num, expanding) {
        switch (num) {
            case 1: {
                this.hide1 = expanding ? true : false;
                setTimeout(() =>{
                    this.expander1.refresh();
                }, 1);
            }
                break;
            case 2: {
                this.hide2 = expanding ? true : false;
                setTimeout(() => {
                    this.expander2.refresh();
                }, 1);
            }
                break;
            case 3: {
                this.hide3 = expanding ? true : false;               
                setTimeout(() => {
                    this.expander3.refresh();
                }, 1);
            }
                break;
            case 4: {
                this.hide4 = expanding ? true : false;
                setTimeout(() => {
                    this.expander4.refresh();
                }, 1);
            }
                break;
            case 5: {
                this.hide5 = expanding ? true : false;
                setTimeout(() => {
                    this.expander5.refresh();
                }, 1);
            }
                break;
            case 6: {
                this.hide6 = expanding ? true : false;
                setTimeout(() => {
                    this.expander6.refresh();
                }, 1);
            }
                break;
            case 7: {
                this.hide7 = expanding ? true : false;
                setTimeout(() => {
                    this.expander7.refresh();
                }, 1);
            }
                break;
            case 8: {
                this.hide8 = expanding ? true : false;
                setTimeout(() => {
                    this.expander8.refresh();
                }, 1);
            }
                break;
            case 9: {
                this.hide9 = expanding ? true : false;
                setTimeout(() => {
                    this.expander9.refresh();
                }, 1);
            }
                break;
            case 10: {
                this.hide10 = expanding ? true : false;
                setTimeout(() => {
                    this.expander10.refresh();
                }, 1);
            }
        }
        this.setHeight();
    }
}
