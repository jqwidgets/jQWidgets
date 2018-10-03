import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'dropdownlistMeal',
    templateUrl: './dropdownlist.component.html'
})
 
export class DropDownComponent {
    @ViewChild('reference') dropdownlist: jqxDropDownListComponent;

    @Output() selectedFood = new EventEmitter();

	  public setDataAdapter(dataAdapter: any): void {
		  this.dropdownlist.source(dataAdapter);
	  };
	
    selectEvent(event: any): void
    {		
        let eventType = event.args.type;
        if (event.args)
        {
            let item = event.args.item;
            if (item)
            {
                let index = item.index;
                let name = item.label;
				let value = item.value;
				let itemDetails = item.originalItem;
				
                if (eventType !== 'none')
                {
                    this.selectedFood.emit({
                        index: index,
						name: name,
						value: value,
						itemInfo: {
							calories: itemDetails.calories,
							carb: itemDetails.carb,
							fat: itemDetails.fat,
							food: itemDetails.food,
							protein: itemDetails.protein
						}
                    })
                }
            }
        }
    }
}