import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxInputComponent } from './angular_jqxinput';
var jqxInputModule = /** @class */ (function () {
    function jqxInputModule() {
    }
    jqxInputModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxInputComponent],
            exports: [jqxInputComponent]
        })
    ], jqxInputModule);
    return jqxInputModule;
}());
export { jqxInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhpbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4aW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTdkQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFQMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFdBQVc7YUFDWjtZQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQzdCLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsganF4SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXJfanF4aW5wdXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbanF4SW5wdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbanF4SW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIGpxeElucHV0TW9kdWxlIHsgfVxuIl19