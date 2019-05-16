interface IRowGenerateData {
    id: number;
    reportsto: number | null;
    available: boolean | null;
    firstname: string;
    lastname: string;
    name: string;
    productname: string;
    quantity: string | number;
    total: string | number;
    price: string | number;
    date: Date;
}

interface IRowGenerateOrdersData {
    id: number | string;
    parentid: number | null;
    customer: string;
    firstname: string;
    lastname: string;
    name: string;
    price: string | number;
    quantity: string | number;
    total: string | number;
    date: Date;
}

export function generateData(rowscount?: number): IRowGenerateData[] {
    return generatedata(rowscount);
}

export function generatedata(rowscount?: number, hasNullValues?: boolean): IRowGenerateData[] {
    const data: IRowGenerateData[] = new Array();

    if (rowscount === undefined) {
        rowscount = 100;
    }

    const firstNames =
    [
        'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
    ];

    const lastNames =
    [
        'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
    ];

    const productNames =
    [
        'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
    ];

    const priceValues =
    [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
    ];

    for (let i = 0; i < rowscount; i++) {
        const row = {} as IRowGenerateData; 

        const productindex = Math.floor(Math.random() * productNames.length);
        const price = parseFloat(priceValues[productindex]);
        const quantity = 1 + Math.round(Math.random() * 10);

        row.id = i;
        row.reportsto = Math.floor(Math.random() * firstNames.length);

        if (i % Math.floor(Math.random() * firstNames.length) === 0) {
            row.reportsto = null;
        }

        row.available = productindex % 2 === 0;

        if (hasNullValues === true) {
            if (productindex % 2 !== 0) {
                const random = Math.floor(Math.random() * rowscount);
                row.available = i % random === 0 ? null : false;
            }
        }

        row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.name = row.firstname + ' ' + row.lastname; 
        row.productname = productNames[productindex];
        row.price = price;
        row.quantity = quantity;
        row.total = price * quantity;

        const date = new Date();
        date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
        date.setHours(0, 0, 0, 0);
        row.date = date;
        
        data[i] = row;
    }

    return data;
}

export function generateordersdata(rowscount?: number): IRowGenerateOrdersData[] {
    // prepare the data
    const data: IRowGenerateOrdersData[] = new Array();

    if (rowscount === undefined) {
        rowscount = 10;
    } 

    const firstNames =
    [
        'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
    ];

    const lastNames =
    [
        'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
    ];

    const productNames =
    [
        'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
    ];

    const priceValues =
    [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
    ];

    const companyNames = ['Dolor Foundation', 'Vivamus Non Lorem LLP', 'Vel Ltd', 'Turpis Incorporated', 'Egestas Nunc PC', 'At Pretium Aliquet Associates', 'Feugiat Inc.', 'Lacus Industries', 'Senectus Et Foundation', 'Sed LLC', 'Maecenas Mi Felis LLC', 'Pede Blandit Ltd', 'Pellentesque Habitant Morbi Institute'
        , 'Mollis Vitae Industries', 'Malesuada Vel Convallis LLP', 'Risus Duis Corp.', 'Convallis LLP', 'Lobortis Augue LLC', 'Auctor LLP', 'Neque Inc.', 'Lorem Eu Corporation'];
        
    for (let i = 0; i < rowscount; i++) {
        const row = {} as IRowGenerateOrdersData;
        
        row.id = i;
        row.parentid = null;
        row.name = 'Order ' + i;
        row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.customer = companyNames[Math.floor(Math.random() * companyNames.length)];

        const date = new Date();
        const month = Math.floor(Math.random() * 11);
        const day = Math.floor(Math.random() * 27);
        date.setFullYear(2016, month, day);
        date.setHours(0, 0, 0, 0);
        row.date = date;
        row.price = '';
        row.quantity = '';
        data.push(row);

        const subRowsCount = 1+Math.round(Math.random() * 8);
        let t = 0;
        for (let j = 0; j < subRowsCount; j++) {
            const subRow = {} as IRowGenerateOrdersData;
            const productindex = Math.floor(Math.random() * productNames.length);
            const price = parseFloat(priceValues[productindex]);
            const quantity = 1;

            subRow.name = productNames[productindex];
            subRow.id = '' + i + '.' + (1 + j);
            subRow.parentid = i;
            subRow.price = price;
            subRow.quantity = 1;

            const subDate = new Date();
            subDate.setFullYear(2016, month, day);
            subDate.setHours(Math.floor(Math.random() * 23), Math.floor(Math.random() * 59), 0, 0);
            subRow.date = subDate;

            row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
            row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
            subRow.customer = row.firstname + ' ' + row.lastname;
            t += quantity * price;
            data.push(subRow);
        }
        row.price = t;
        row.quantity = 1;
    }

    return data;
}