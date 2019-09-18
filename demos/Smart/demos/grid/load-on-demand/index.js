import {App} from "../../../../../jqwidgets-smart-wc/modules/smart.element.js";
import {smartGrid} from "../../../../../jqwidgets-smart-wc/modules/smart.grid.js";
import {smartDropDownList} from "../../../../../jqwidgets-smart-wc/modules/smart.dropdownlist.js";

const app = new App({
    selector: "#app",
    components: [smartGrid, smartDropDownList],
    template: {
        "#grid": {
            properties: {
                columns: [
					{
					    label: 'First Name', dataField: 'firstName'
					},
					{ label: 'Last Name', dataField: 'lastName' },
					{ label: 'Product', dataField: 'productName' },
					{ label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
					{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
					{ label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
                ]
            },
            bind: {
                dataSource: 'data',
                computed: function(propertyObject) {
                    const item = propertyObject.item;
                    const value = propertyObject.value;
              
                    if (propertyObject.name === 'data') {
                        propertyObject.value = new Smart.DataAdapter(
					    {
					        dataSource: propertyObject.value,
					        dataFields:
						    [
							    'id: number',
							    'firstName: string',
							    'lastName: string',
							    'productName: string',
							    'available: bool',
							    'quantity: number',
							    'price: number',
							    'total: number'
						    ]
					    })
                    }
                }
            }
        },
        "#dropDownList": {
            properties: {
                displayMember: 'firstName'
            },
            bind: {
                dataSource: 'data',
                selectedIndexes: 'index'
            }
        }
    },
    data: {
        index: [1],
        data: generateData(100),
        message: "Hello World"					
    },
    render: function() {
        return `
	       <smartGrid id="grid"></smartGrid>
		    <br/><br/>
	        <span>
			    {{message}}
	        </span>
	       <br/><br/>
	       <smartDropDownList id="dropDownList"></smartDropDownList>
         `	  
    }
});

window.onload = function() {
   app.data.index = [2];
}