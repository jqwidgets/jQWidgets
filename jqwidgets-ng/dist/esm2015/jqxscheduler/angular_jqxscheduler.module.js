import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxdate from '../../jqwidgets-scripts/jqwidgets/jqxdate';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxcolorpicker from '../../jqwidgets-scripts/jqwidgets/jqxcolorpicker';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxscheduler from '../../jqwidgets-scripts/jqwidgets/jqxscheduler';
import * as jqxschedulerapi from '../../jqwidgets-scripts/jqwidgets/jqxscheduler.api';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxSchedulerComponent } from './angular_jqxscheduler';
let jqxSchedulerModule = class jqxSchedulerModule {
};
jqxSchedulerModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxSchedulerComponent],
        exports: [jqxSchedulerComponent]
    })
], jqxSchedulerModule);
export { jqxSchedulerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzY2hlZHVsZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHNjaGVkdWxlci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4c2NoZWR1bGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVMvRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFJLENBQUE7QUFBdEIsa0JBQWtCO0lBUDlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxFQUVSO1FBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDakMsQ0FBQztHQUNXLGtCQUFrQixDQUFJO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsganF4U2NoZWR1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyX2pxeHNjaGVkdWxlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeFNjaGVkdWxlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtqcXhTY2hlZHVsZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIGpxeFNjaGVkdWxlck1vZHVsZSB7IH1cblxuIl19