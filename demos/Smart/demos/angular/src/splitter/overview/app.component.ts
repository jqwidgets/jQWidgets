import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    dataSource: any[] = [
        {
            id: "item0",
            size: "50%",
            content:
                "<smart-splitter>" +
                    '<smart-splitter-item size="33%" collapsible id="item1">Item 1</smart-splitter-item>' +
                    '<smart-splitter-item size="33%" id="item2">Item 2</smart-splitter-item>' +
                    '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
                "</smart-splitter>"
        },
        {
            size: "25%",
            id: "item4",
            content: "Item 4"
        },
        {
            id: "item5",
            content: "Item 5"
        }
    ];
}
