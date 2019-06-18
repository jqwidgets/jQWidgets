import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCalendarComponent } from './angular_jqxcalendar';
let jqxCalendarModule = class jqxCalendarModule {
};
jqxCalendarModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxCalendarComponent],
        exports: [jqxCalendarComponent]
    })
], jqxCalendarModule);
export { jqxCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjYWxlbmRhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4Y2FsZW5kYXIvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTN0QsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSSxDQUFBO0FBQXJCLGlCQUFpQjtJQVA3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNoQyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpxeENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeGNhbGVuZGFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeENhbGVuZGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeENhbGVuZGFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhDYWxlbmRhck1vZHVsZSB7IH1cblxuIl19