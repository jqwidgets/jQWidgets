import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxformattedinput from '../../jqwidgets-scripts/jqwidgets/jqxformattedinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxFormattedInputComponent } from './angular_jqxformattedinput';
let jqxFormattedInputModule = class jqxFormattedInputModule {
};
jqxFormattedInputModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxFormattedInputComponent],
        exports: [jqxFormattedInputComponent]
    })
], jqxFormattedInputModule);
export { jqxFormattedInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhmb3JtYXR0ZWRpbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4Zm9ybWF0dGVkaW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGZvcm1hdHRlZGlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFTekUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FBSSxDQUFBO0FBQTNCLHVCQUF1QjtJQVBuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN0QyxDQUFDO0dBQ1csdUJBQXVCLENBQUk7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeGZvcm1hdHRlZGlucHV0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhGb3JtYXR0ZWRJbnB1dE1vZHVsZSB7IH1cblxuIl19