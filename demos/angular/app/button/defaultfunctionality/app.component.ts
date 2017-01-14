 
import { Component, ViewChild } from '@angular/core';

import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: `../app/button/defaultfunctionality/app.component.htm`
})

export class AppComponent
{ 
    @ViewChild('textImageButton') myTextImageButton: jqxButtonComponent;
    @ViewChild('htmlButton') myHTMLButton: jqxButtonComponent;
     
    buttonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Button Clicked</span>';
    }
    submitButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Submit Button Clicked</span>';
    }
    imageButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Image Button Clicked</span>';
    }
    textImageButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Text/Image Button Clicked</span>';
        this.myTextImageButton.setOptions({ textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center" });
    }
    hTMLButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>HTML Button Clicked</span>';
        this.myHTMLButton.value("<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>");
    } 
}

