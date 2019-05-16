import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox'
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();
    private myCheckBox = React.createRef<JqxCheckBox>();
    private updatingSelection: boolean;
    private updatingSelectionFromDataTable: boolean;

    constructor(props: {}) {
        super(props);
        this.tableOnRowSelect = this.tableOnRowSelect.bind(this);
        this.tableOnRowUnselect = this.tableOnRowUnselect.bind(this);
        this.allRowsSelected = this.allRowsSelected.bind(this);

        const source = {
            dataType: 'array',
            localData: this.generateData()
        };

        const columns: IDataTableProps['columns'] = [
            {
                align: 'center',
                cellsRenderer: (row: number, column: string, value: any, rowData: any): string => {
                    let image = '<div style="margin: 5px; margin-bottom: 3px;">';
                    const imgurl = 'https://www.jqwidgets.com/react/images/' + rowData.firstname.toLowerCase() + '.png';
                    const img = '<img width="60" height="60" style="display: block" src="' + imgurl + '"/>';
                    image += img;
                    image += '</div>';
                    return image;
                },
                dataField: 'firstname', 
                renderer: (text, align, height) => {
                    return '<div id="myCheckBox" style="z-index: 999; margin: 5px; margin-left: 30px; margin-top: 8px; margin-bottom: 3px;"></div>';
                },
                text: 'Photo',
                width: 80
            },
            {
                align: 'center',
                cellsRenderer: (row: number, column: string, value: any, rowData: any): string => {
                    let container = '<div style="width: 100%; height: 100%;">'
                    let leftcolumn = '<div style="float: left; width: 50%;">';
                    let rightcolumn = '<div style="float: left; width: 50%;">';

                    const firstname = '<div style="margin: 10px;"><b>First Name:</b> ' + rowData.firstname + '</div>';
                    const lastname = '<div style="margin: 10px;"><b>Last Name:</b> ' + rowData.lastname + '</div>';
                    const title = '<div style="margin: 10px;"><b>Title:</b> ' + rowData.title + '</div>';
                    const address = '<div style="margin: 10px;"><b>Address:</b> ' + rowData.address + '</div>';

                    leftcolumn += firstname;
                    leftcolumn += lastname;
                    leftcolumn += title;
                    leftcolumn += address;
                    leftcolumn += '</div>';
                    const postalcode = '<div style="margin: 10px;"><b>Postal Code:</b> ' + rowData.postalcode + '</div>';
                    const city = '<div style="margin: 10px;"><b>City:</b> ' + rowData.city + '</div>';
                    const phone = '<div style="margin: 10px;"><b>Phone:</b> ' + rowData.homephone + '</div>';
                    const hiredate = '<div style="margin: 10px;"><b>Hire Date:</b> ' + rowData.hiredate + '</div>';
                    rightcolumn += postalcode;
                    rightcolumn += city;
                    rightcolumn += phone;
                    rightcolumn += hiredate;
                    rightcolumn += '</div>';
                    container += leftcolumn;
                    container += rightcolumn;
                    container += '</div>';
                    return container;
                },
                dataField: 'lastname',
                text: 'Details'
            }
        ];

        this.state = {
            columns,
            source: new jqx.dataAdapter(source)
        };
    }

    public componentDidMount() {

        const onChange = (event: any) => {
            if (!this.updatingSelectionFromDataTable) {
                const args = event.args;
                const rows = this.myDataTable.current!.getRows();
                this.updatingSelection = true;
                if (args.checked) {
                    for (let i = 0; i < rows.length; i++) {
                        this.myDataTable.current!.selectRow(i);
                    }
                }
                else {
                    this.myDataTable.current!.clearSelection();
                }
                this.updatingSelection = false;
            }
        };

        ReactDOM.render(
            <JqxCheckBox theme={'material-purple'} ref={this.myCheckBox} onChange={onChange}/>,
            document.querySelector('#myCheckBox')
        );
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                onRowSelect={this.tableOnRowSelect} onRowUnselect={this.tableOnRowUnselect}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns} />
        );
    }

    private tableOnRowSelect(): void {
        this.updatingSelectionFromDataTable = true;
        if (!this.updatingSelection) {
            this.myCheckBox.current!.setOptions({ checked: this.allRowsSelected() });
        }
        this.updatingSelectionFromDataTable = false;
    };

    private tableOnRowUnselect(): void {
        this.updatingSelectionFromDataTable = true;
        if (!this.updatingSelection) {
            this.myCheckBox.current!.setOptions({ checked: this.allRowsSelected() });
        }
        this.updatingSelectionFromDataTable = false;
    };

    private allRowsSelected() {
        const selection = this.myDataTable.current!.getSelection();
        const rows = this.myDataTable.current!.getRows();
        if (selection.length === 0) {
            return false;
        }
        if (rows.length !== selection.length) {
            return null;
        }

        return true;
    }

    private generateData(): any[] {
        const data = [];
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
        const titleofcourtesy = ['Ms.', 'Dr.', 'Ms.', 'Mrs.', 'Mr.', 'Mr.', 'Mr.', 'Ms.', 'Ms.'];
        const birthdate = ['08-Dec-48', '19-Feb-52', '30-Aug-63', '19-Sep-37', '04-Mar-55', '02-Jul-63', '29-May-60', '09-Jan-58', '27-Jan-66'];
        const hiredate = ['01-May-92', '14-Aug-92', '01-Apr-92', '03-May-93', '17-Oct-93', '17-Oct-93', '02-Jan-94', '05-Mar-94', '15-Nov-94'];
        const address = ['507 - 20th Ave. E. Apt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House', 'Miner Rd.', 'Edgeham Hollow', 'Winchester Way', '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.'];
        const city = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'London', 'London', 'Seattle', 'London'];
        const postalcode = ['98122', '98401', '98033', '98052', 'SW1 8JR', 'EC2 7JR', 'RG1 9SP', '98105', 'WG2 7LT'];
        const country = ['USA', 'USA', 'USA', 'USA', 'UK', 'UK', 'UK', 'USA', 'UK'];
        const homephone = ['(206) 555-9857', '(206) 555-9482', '(206) 555-3412', '(206) 555-8122', '(71) 555-4848', '(71) 555-7773', '(71) 555-5598', '(206) 555-1189', '(71) 555-4444'];
        const notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed "The Art of the Cold Call."  Nancy is a member of Toastmasters International.',
            'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
            'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
            'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
            'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses "Successful Telemarketing" and "International Sales Management."  He is fluent in French.',
            'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses "Multi-Cultural Selling" and "Time Management for the Sales Professional."  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
            'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled "Selling in Europe," he was transferred to the London office in March 1993.',
            'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
            'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
        let k = 0;
        for (let i = 0; i < 5; i++) {
            const row: any = {};
            /* tslint:disable:no-string-literal */
            row['firstname'] = firstNames[k];
            row['lastname'] = lastNames[k];
            row['title'] = titles[k];
            row['titleofcourtesy'] = titleofcourtesy[k];
            row['birthdate'] = birthdate[k];
            row['hiredate'] = hiredate[k];
            row['address'] = address[k];
            row['city'] = city[k];
            row['postalcode'] = postalcode[k];
            row['country'] = country[k];
            row['homephone'] = homephone[k];
            row['notes'] = notes[k];
            data[i] = row;
            k++;
        }

        return data;
    }
}

export default App;