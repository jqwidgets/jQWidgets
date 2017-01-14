 
import { Component } from '@angular/core';

import { jqxDateTimeInputComponent } from '../../../../../jqwidgets-ts/angular_jqxdatetimeinput';

@Component({
    selector: 'my-app',
    templateUrl: `../app/datetimeinput/twowaydatabinding/app.component.htm`
}) 

export class AppComponent
{ 
    time: string;
    date: string;
}


