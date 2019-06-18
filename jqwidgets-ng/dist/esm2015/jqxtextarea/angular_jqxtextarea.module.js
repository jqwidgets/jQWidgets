import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxtextarea from '../../jqwidgets-scripts/jqwidgets/jqxtextarea';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxTextAreaComponent } from './angular_jqxtextarea';
let jqxTextAreaModule = class jqxTextAreaModule {
};
jqxTextAreaModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxTextAreaComponent],
        exports: [jqxTextAreaComponent]
    })
], jqxTextAreaModule);
export { jqxTextAreaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0ZXh0YXJlYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4dGV4dGFyZWEvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRleHRhcmVhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTN0QsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSSxDQUFBO0FBQXJCLGlCQUFpQjtJQVA3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNoQyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpxeFRleHRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeHRleHRhcmVhJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeFRleHRBcmVhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeFRleHRBcmVhQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhUZXh0QXJlYU1vZHVsZSB7IH1cblxuIl19