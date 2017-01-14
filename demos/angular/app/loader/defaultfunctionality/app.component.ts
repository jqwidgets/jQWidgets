 
import { Component, ViewChild } from '@angular/core';

import { jqxLoaderComponent } from '../../../../../jqwidgets-ts/angular_jqxloader';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: 
        `<jqxLoader #loaderReference
            [width]='100' [height]='60' [imagePosition]='"top"'>
         </jqxLoader>

         <jqxButton [width]='150' style="float: left;" (onClick)="open()">Open Loader</jqxButton>

         <jqxButton [width]='100' style="float: left; margin-left: 10px;" (onClick)="close()">Close</jqxButton>`
})

export class AppComponent
{
    @ViewChild('loaderReference') myLoader: jqxLoaderComponent;

    open(): void
    {
        this.myLoader.open();
    }

    close(): void
    {
        this.myLoader.close();
    }
}
