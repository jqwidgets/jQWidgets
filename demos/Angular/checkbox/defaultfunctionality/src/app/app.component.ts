import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('span10') span10: ElementRef;
    @ViewChild('span11') span11: ElementRef;
    @ViewChild('span12') span12: ElementRef;

    checkBox10OnChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.span10.nativeElement.innerHTML = 'Checked';
        }
        else {
            this.span10.nativeElement.innerHTML = 'Unchecked';
        }
    }
    checkBox11OnChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.span11.nativeElement.innerHTML = 'Checked';
        }
        else {
            this.span11.nativeElement.innerHTML = 'Unchecked';
        }
    }
    checkBox12OnChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.span12.nativeElement.innerHTML = 'Checked';
        }
        else if (false == checked) {
            this.span12.nativeElement.innerHTML = 'Unchecked';
        }
        else {
            this.span12.nativeElement.innerHTML = 'Indeterminate';
        }
    }
}
