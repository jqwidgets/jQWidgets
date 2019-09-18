(function GenerateData() {
	let data = new Array();
	let firstNames =
	[
		"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
	];
	let lastNames =
	[
		"Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
	];
	let productNames =
	[
		"Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
	];
	let priceValues =
	[
		"2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
	];

	for (let i = 0; i < 5000; i++) {
		let row = {};
		let productindex = Math.floor(Math.random() * productNames.length);
		let price = parseFloat(priceValues[productindex]);
		let quantity = 1 + Math.round(Math.random() * 10);
		row["id"] = i;
		row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
		row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
		row["productName"] = productNames[productindex];
		row["price"] = price;
		row["quantity"] = quantity;
		row["total"] = price * quantity;
		data[i] = row;
	}

	window.Data = data;
}());

function GetData(first, last) {
	return Data.slice(first, last);
}


Smart('#grid', class {
	get properties() {
		return {
			paging: {
				enabled: true,
				pageSize: 10,
				pageIndex: 1
			},
			pager: {
			    visible: true,
			    pageSizeSelector: {
                    visible: true
			    },
			    pageIndexSelectors: {
                    dataSource: 3
			    }
			},
			dataSource: new Smart.DataAdapter(
			{
				virtualDataSourceLength: 5000,
				virtualDataSourceCache: true,
				virtualDataSource: function(resultCallbackFunction, details){
					setTimeout(function() {
						resultCallbackFunction(
							{
								dataSource: GetData(details.first, details.last)
							}
						);
					}, 100);
				},
				dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'productName: string',
					'quantity: number',
					'price: number',
					'total: number'
				]
			}),
			columns: [
			'id',
			{
				label: 'First Name', dataField: 'firstName'
			},
			{ label: 'Last Name', dataField: 'lastName' },
			{ label: 'Product', dataField: 'productName'},
			{ label: 'Quantity',  dataField: 'quantity'},
			{ label: 'Unit Price',  dataField: 'price', cellsFormat: 'c2' },
			{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
			]        
		}
	}
});

window.onload = function () {
    const checkBoxes = document.querySelectorAll('smart-check-box');
    const grid = document.querySelector('smart-grid');

    for (let i = 0; i < checkBoxes.length; i++) {
        const checkBox = checkBoxes[i];

        checkBox.addEventListener('change', function (event) {
            switch (this.id) {
                case 'showPagerSummary':
                    grid.pager.summary.visible = this.checked;
                    document.querySelector('#changeSummaryPosition').disabled = !this.checked;
                    break;
                case 'showTopPager':
                case 'showBottomPager':
                    const isTopPagerVisible = document.querySelector('#showTopPager').checked;
                    const isBottomPagerVisible = document.querySelector('#showBottomPager').checked;

                    grid.pager.visible = true;

                    if (isTopPagerVisible && isBottomPagerVisible) {
                        grid.pager.position = 'both';
                    }
                    else if (isTopPagerVisible) {
                        grid.pager.position = 'near';
                    }
                    else if (isBottomPagerVisible) {
                        grid.pager.position = 'far';
                    }
                    else {
                        grid.pager.visible = false;
                    }
                    break;
                case 'changePageIndexSelectorsCount':
                    grid.pager.pageIndexSelectors.dataSource = this.checked ? 3 : 5;
                    break;
                case 'showPageSizeSelector':
                    grid.pager.pageSizeSelector.visible = this.checked;
                    document.querySelector('#changePageSizeSelectorPosition').disabled = !this.checked;
                    break;
                case 'changePageSizeSelectorPosition':
                    grid.pager.pageSizeSelector.position = this.checked ? 'near' : 'far';
                    break;
                case 'changeSummaryPosition':
                    grid.pager.summary.position = this.checked ? 'near' : 'far';
                    break;
                case 'changeNavigationInputPosition':
                    grid.pager.navigationInput.position = this.checked ? 'near' : 'far';
                    break;
                case 'changeNavigationButtonsPosition':
                    grid.pager.navigationButtons.position = this.checked ? 'near' : 'both';
                    break;
                case 'showPrevNextNavigationButtons':
                    grid.pager.navigationButtons.prevNextButtons.visible = this.checked;
                    if (!grid.pager.navigationButtons.prevNextButtons.visible && !grid.pager.navigationButtons.firstLastButtons.visible) {
                        document.querySelector('#changeNavigationButtonsPosition').disabled = true;
                        document.querySelector('#showNavigationButtonsAsLabels').disabled = true;
                    }
                    else {
                        document.querySelector('#changeNavigationButtonsPosition').disabled = false;
                        document.querySelector('#showNavigationButtonsAsLabels').disabled = false;
                    }
                    break;
                case 'showFirstLastNavigationButtons':
                    grid.pager.navigationButtons.firstLastButtons.visible = this.checked;
                    if (!grid.pager.navigationButtons.prevNextButtons.visible && !grid.pager.navigationButtons.firstLastButtons.visible) {
                        document.querySelector('#changeNavigationButtonsPosition').disabled = true;
                        document.querySelector('#showNavigationButtonsAsLabels').disabled = true;
                    }
                    else {
                        document.querySelector('#changeNavigationButtonsPosition').disabled = false;
                        document.querySelector('#showNavigationButtonsAsLabels').disabled = false;
                    }
                    break;
                case 'showNavigationButtonsAsLabels':
                    grid.pager.navigationButtons.labels.visible = this.checked;
                    break;
                case 'showNavigationInput':
                    document.querySelector('#changeNavigationInputPosition').disabled = !this.checked;
                    grid.pager.navigationInput.visible = this.checked;
                    break;
                case 'showPagerIndexSelectors':
                    grid.pager.pageIndexSelectors.visible = this.checked;
                    break;
                case 'showPagerEllipsis':
                    grid.pager.autoEllipsis = this.checked ? 'both' : 'none';
                    break;
            }
        });
    }
}