import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxchartcore from '../../jqwidgets-scripts/jqwidgets/jqxchart.core';
import * as jqxchartapi from '../../jqwidgets-scripts/jqwidgets/jqxchart.api';
import * as jqxchartannotations from '../../jqwidgets-scripts/jqwidgets/jqxchart.annotations';
import * as jqxchartrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector';
import * as jqxchartwaterfall from '../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxChartComponent } from './angular_jqxchart';
let jqxChartModule = class jqxChartModule {
};
jqxChartModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxChartComponent],
        exports: [jqxChartComponent]
    })
], jqxChartModule);
export { jqxChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjaGFydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4Y2hhcnQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVN2RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUksQ0FBQTtBQUFsQixjQUFjO0lBUDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxFQUVSO1FBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7S0FDN0IsQ0FBQztHQUNXLGNBQWMsQ0FBSTtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBqcXhDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhcl9qcXhjaGFydCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW2pxeENoYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW2pxeENoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBqcXhDaGFydE1vZHVsZSB7IH1cblxuIl19