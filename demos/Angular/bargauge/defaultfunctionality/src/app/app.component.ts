import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }

    values: number[] = [102, 115, 130, 137];
}