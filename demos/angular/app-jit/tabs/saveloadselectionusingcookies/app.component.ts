import { Component, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterContentInit {
    ngAfterContentInit() {
        this.index = jqx.cookie.cookie("jqxTabs_jqxWidget");
        if (undefined == this.index) {
            this.index = 0;
        }
    }

    index: any = null;

    selected(event: any): void {
        jqx.cookie.cookie("jqxTabs_jqxWidget", event.args.item);
    }
}