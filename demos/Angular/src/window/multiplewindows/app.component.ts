import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('mainDemoContainer', { static: false }) mainDemoContainer: ElementRef;
    
    showWindowButtonClick(): void {
        let windows = document.getElementsByClassName('jqx-window'),
            count = windows.length;

        while (count) {
            count -= 1;
            (<any>$('#' + windows[count].id)).jqxWindow('open');
        }
    }

    count: number = 0;

    addWindowButtonClick(): void {
        this.count += 1;
        //let mainDemoContainer = document.getElementById('mainDemoContainer');
        let widgetContainer = document.createElement('div');
        //let widgetContainer = '<div></div>';


        //this.mainDemoContainer.nativeElement.appendChild(widgetContainer);
        this.mainDemoContainer.nativeElement.appendChild(widgetContainer);

        let newWindow = document.createElement('div');
        let currentWindowID = 'windowNew' + this.count
        newWindow.id = currentWindowID;
        newWindow.innerHTML = '<div>Header ' + this.count + '</div>' +
            '<div>Content of window  ' + this.count + '</div>';
        widgetContainer.appendChild(newWindow);

        jqwidgets.createInstance('#' + currentWindowID, 'jqxWindow', { height: 150, width: 300 });
    }    
}