import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCheckBoxComponent } from './angular_jqxcheckbox';
let jqxCheckBoxModule = class jqxCheckBoxModule {
};
jqxCheckBoxModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxCheckBoxComponent],
        exports: [jqxCheckBoxComponent]
    })
], jqxCheckBoxModule);
export { jqxCheckBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjaGVja2JveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4Y2hlY2tib3gvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTN0QsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSSxDQUFBO0FBQXJCLGlCQUFpQjtJQVA3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNoQyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpxeENoZWNrQm94Q29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeGNoZWNrYm94JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeENoZWNrQm94Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeENoZWNrQm94Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhDaGVja0JveE1vZHVsZSB7IH1cblxuIl19