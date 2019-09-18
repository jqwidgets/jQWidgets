Smart('#grid', class {
    get properties() {
        return {
            dataSource: new Smart.DataAdapter(
			{
			 	dataSource: generateOrdersData(),
                id: 'id',
				keyDataField: 'id',
                parentDataField: 'parentid',
			    dataFields:
                    [
                        'id: string',					   
                        'name: string',
                        'customer: string',
                        'price: number',
						'date: date'
                    ]
            }),
            columnResizeMode: 'nextColumn',
            columns: [
				  { label: 'Order Name', dataField: "name", align: 'center', width: 200 },
                  { label: 'Customer', dataField: "customer", align: 'center', width: 200 },
                  { label: 'Price', dataField: "price", cellsFormat: "c2", align: 'center', cellsAlign: 'right', width: 80 },
                  {
                      label: 'Order Date', dataField: "date", align: 'center', cellsFormat: "dd-MMMM-yyyy hh:mm"
                  }
            ]
        }
    }
});