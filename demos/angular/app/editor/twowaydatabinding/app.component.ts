 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxEditorComponent } from '../../../../../jqwidgets-ts/angular_jqxeditor';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 650px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            {{ value | json }}
        </fieldset>

        <jqxEditor #editorReference [(ngModel)]='value'>
            &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor.
        </jqxEditor>`
})

export class AppComponent implements AfterViewInit
{ 
    value: string;

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
