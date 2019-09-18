window.onload = function () {
    const listBox = document.querySelector('smart-list-box');


    listBox.remoteFilteringDetails = {
        url: '../misc/customers.txt',
        success: function (filterQuery, items) {
            setTimeout(function () {
                console.log(items);

                if (!filterQuery) {
                    listBox.dataSource = [];
                    listBox.displayLoadingIndicator = false;
                    return;
                }

                for (let i = 0; i < items.length; i++) {
                    if (items[i].City.toLowerCase().indexOf(filterQuery.toLowerCase()) !== 0) {
                        items[i] = undefined;
                    }
                }

                items = items.filter(item => item !== undefined);

                listBox.displayMember = 'CompanyName';
                listBox.valueMember = 'CustomerID';
                listBox.displayLoadingIndicator = false;
                listBox.dataSource = items;
            }, 500);
        },
        error: function (error) {
            console.log('Error');
        },
    };
}