import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('events') eventsLog: ElementRef;

    count = 0;
    clearLog(): void {
        this.count++;
        let log = this.eventsLog.nativeElement;

        if (this.count  >= 2) {
            log.innerHTML = '';
            this.count = 0;
        }
    }
   
    firstBtnOnChange(event: any): void {
        this.clearLog(); 
        let log = this.eventsLog.nativeElement;
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    }

    secondBtnOnChange(event: any): void {
        this.clearLog();
        let log = this.eventsLog.nativeElement;
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    }

    thirdBtnOnChange(event: any): void {
        this.clearLog();
        let log = this.eventsLog.nativeElement;
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    }

}
