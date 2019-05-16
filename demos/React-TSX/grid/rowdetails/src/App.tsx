import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datatype: 'array',
            localdata: this.generateData()
        };

        const initrowdetails = (index: any, parentElement: any, gridElement: any, datarecord: any): void => {
            const tabsdiv = parentElement.children[0];

            if (tabsdiv != null) {
                const marginTop = { marginTop: '10px' };
                const tabs =
                    <JqxTabs theme={'material-purple'} style={{ margin: '10px' }} width={820} height={170}>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>{datarecord.firstname}</li>
                            <li>Notes</li>
                        </ul>
                        <div>
                            <div style={{ margin: '5px' }}>
                                <div style={{ float: 'left', width: '15%' }}>
                                    <div style={{ marginTop: '10px' }}>
                                        <div className="jqx-rc-all" style={{ margin: '10px' }}><b>Photo:</b></div>
                                        <img height={60} src={'https://www.jqwidgets.com/react/images/' + datarecord.firstname.toLowerCase() + '.png'} style={{ marginLeft: '10px' }} />
                                    </div>
                                </div>
                                <div style={{ float: 'left', width: '45%' }}>
                                    <div style={marginTop}><b>First Name: </b>{datarecord.firstname}</div>
                                    <div style={marginTop}><b>Last Name: </b>{datarecord.lastname}</div>
                                    <div style={marginTop}><b>Title: </b>{datarecord.title}</div>
                                    <div style={marginTop}><b>Address: </b>{datarecord.address}</div>
                                </div>
                                <div style={{ float: 'left', width: '40%' }}>
                                    <div style={marginTop}><b>Postal Code: </b>{datarecord.postalcode}</div>
                                    <div style={marginTop}><b>City: </b>{datarecord.city}</div>
                                    <div style={marginTop}><b>Phone: </b>{datarecord.homephone}</div>
                                    <div style={marginTop}><b>Hire Date: </b>{datarecord.hiredate}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ whiteSpace: 'normal', margin: '5px' }}>
                                <span>{datarecord.notes}</span>
                            </div>
                        </div>
                    </JqxTabs>

                ReactDOM.render(tabs, tabsdiv);
            }
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Title', datafield: 'title', width: 180 },
                { text: 'City', datafield: 'city', width: 100 },
                { text: 'Country', datafield: 'country' }
            ],
            initrowdetails,
            rowdetailstemplate: {
                rowdetails: '<div style="margin: 10px;"><ul style="margin-left: 30px;"><li class="title"></li><li>Notes</li></ul><div class="information"></div><div class="notes"></div></div>',
                rowdetailsheight: 200
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        this.myGrid.current!.showrowdetails(0);
        this.myGrid.current!.showrowdetails(1);
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} height={250} source={this.state.source} columns={this.state.columns}
                rowdetails={true} initrowdetails={this.state.initrowdetails} rowdetailstemplate={this.state.rowdetailstemplate} />
        );
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
        const notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed `The Art of the Cold Call.`  Nancy is a member of Toastmasters International.',
            'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
            'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
            'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
            'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses `Successful Telemarketing` and `International Sales Management.`  He is fluent in French.',
            'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses `Multi-Cultural Selling` and `Time Management for the Sales Professional.`  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
            'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled `Selling in Europe,` he was transferred to the London office in March 1993.',
            'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
            'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
        let k = 0;
        for (let i = 0; i < firstNames.length; i++) {
            const datarecord: any = {};
            /* tslint:disable:no-string-literal */
            datarecord['firstname'] = firstNames[k];
            datarecord['lastname'] = lastNames[k];
            datarecord['title'] = titles[k];
            datarecord['titleofcourtesy'] = titleofcourtesy[k];
            datarecord['birthdate'] = birthdate[k];
            datarecord['hiredate'] = hiredate[k];
            datarecord['address'] = address[k];
            datarecord['city'] = city[k];
            datarecord['postalcode'] = postalcode[k];
            datarecord['country'] = country[k];
            datarecord['homephone'] = homephone[k];
            datarecord['notes'] = notes[k];
            data[i] = datarecord;
            k++;
        }

        return data;
    }
}

export default App;