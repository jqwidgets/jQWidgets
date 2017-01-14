 
import { Component } from '@angular/core';

import { jqxFileUploadComponent } from '../../../../../jqwidgets-ts/angular_jqxfileupload';

@Component({
    selector: 'my-app',
    template:
         `<jqxFileUpload
            [width]='300' [uploadUrl]='"imageUpload.php"' [fileInputName]='"fileToUpload"'>
        </jqxFileUpload>`
}) 

export class AppComponent
{ 

}
