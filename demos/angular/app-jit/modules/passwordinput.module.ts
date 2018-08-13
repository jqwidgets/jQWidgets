import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { jqxPasswordInputComponent } from '../../jqwidgets-ts/angular_jqxpasswordinput';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxPasswordInputComponent],
    exports: [jqxPasswordInputComponent],
})
export class PasswordInputModule { }

