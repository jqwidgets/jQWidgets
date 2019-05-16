
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxEditorComponent } from './angular_jqxeditor';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxEditorComponent],
  exports: [jqxEditorComponent]
})
export class jqxEditorModule { }

