import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();

    constructor(props: {}) {
        super(props);
        const employees: any[] = [
            { "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" },
            { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" },
            { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." },
            { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." },
            { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" },
            { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." },
            { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" },
            { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." },
            { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }
        ];

        const source: any = {
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'ReportsTo', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Country', type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'HireDate', type: 'date' },
                { name: 'BirthDate', type: 'date' }
            ],
            dataType: 'json',
            hierarchy:
            {
                keyDataField: { name: 'EmployeeID' },
                parentDataField: { name: 'ReportsTo' }
            },
            id: 'EmployeeID',
            localData: employees
        };

        const dataAdapter: any = new jqx.dataAdapter(source, {
            beforeLoadComplete(records: any[]): any[] {
                const notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
                    'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
                    'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
                    'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
                    'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
                    'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
                    'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' he was transferred to the London office in March 1993.',
                    'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
                    'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
                    
                for (let i = 0; i < records.length; i++) {
                    const imgUrl = 'https://www.jqwidgets.com/react/images/' + records[i].FirstName.toLowerCase() + '.png';
                    records[i].icon = imgUrl;
                    records[i].notes = notes[i];
                }

                return records;
            }
        });

        this.state = {
            columnGroups: [
                { text: 'Name', name: 'Name' }
            ],
            columns: [
                { columnGroup: 'Name', dataField: 'FirstName', text: 'FirstName', width: 200 },
                { columnGroup: 'Name', dataField: 'LastName', text: 'LastName', width: 200 },
                { dataField: 'City', text: 'City', width: 120 },
                { dataField: 'Country', text: 'Country' },
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(2);
                });
            },
            rowDetailsRenderer: (rowKey: any, row: any): string => {
                const indent = (1 + row.level) * 20;
                const details = "<table style='margin: 10px; min-height: 95px; height: 95px; margin-left: " + indent + "px;'><tbody><tr><td>" + "<img style='max-width:60px;' height='60' src='" + row.icon + "'/></td><td>" + row.notes + "</td></tr></tbody></table>";
                return details;
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                source={this.state.source}
                pageable={true}
                pageSize={3}
                rowDetails={true}
                rowDetailsRenderer={this.state.rowDetailsRenderer}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
