import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxmaskedinput from '../../jqwidgets-scripts/jqwidgets/jqxmaskedinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxMaskedInputComponent } from './angular_jqxmaskedinput';
let jqxMaskedInputModule = class jqxMaskedInputModule {
};
jqxMaskedInputModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxMaskedInputComponent],
        exports: [jqxMaskedInputComponent]
    })
], jqxMaskedInputModule);
export { jqxMaskedInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhtYXNrZWRpbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4bWFza2VkaW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeG1hc2tlZGlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTbkUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBSSxDQUFBO0FBQXhCLG9CQUFvQjtJQVBoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUNuQyxDQUFDO0dBQ1csb0JBQW9CLENBQUk7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpxeE1hc2tlZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeG1hc2tlZGlucHV0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeE1hc2tlZElucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeE1hc2tlZElucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhNYXNrZWRJbnB1dE1vZHVsZSB7IH1cblxuIl19