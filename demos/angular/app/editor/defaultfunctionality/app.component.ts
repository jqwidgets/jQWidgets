 
import { Component, AfterViewInit } from '@angular/core';

import { jqxEditorComponent } from '../../../../../jqwidgets-ts/angular_jqxeditor';

@Component({
    selector: 'my-app',
    templateUrl: `../app/editor/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularEditor')[0]).childNodes[0]).style.width = '800px';
            (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularEditor')[0]).childNodes[0]).style.height = '400px';
            (<HTMLElement>document.getElementsByClassName('jqx-editor-content')[0]).style.height = '91%';
        });
    }   
}
