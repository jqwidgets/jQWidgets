import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

export interface IState extends ITreeGridProps {
  alignSource?: IDropDownListProps["source"];
}

class App extends React.PureComponent<{}, IState> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    this.columnAlignmentChange = this.columnAlignmentChange.bind(this);
    this.cellsAlignmentChange = this.cellsAlignmentChange.bind(this);

    const employees: any[] = [
      { "Address": "908 W. Capital Way", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Country": "USA", "EmployeeID": 2, "FirstName": "Andrew", "HireDate": "1992-08-14 00:00:00", "LastName": "Fuller", "Title": "Vice President, Sales", "children": [{ "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." }, { "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" }, { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." }, { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." }, { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill", "expanded": "true", "children": [{ "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }, { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }] }], "expanded": "true" }
    ];

    const source: any = {
      dataFields: [
        { name: 'EmployeeID', type: 'number' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'Country', type: 'string' },
        { name: 'City', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'HireDate', type: 'date' },
        { name: 'children', type: 'array' },
        { name: 'expanded', type: 'bool' },
        { name: 'BirthDate', type: 'date' }
      ],
      dataType: 'json',
      hierarchy:
      {
        root: 'children'
      },
      id: 'EmployeeID',
      localData: employees
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      alignSource: ['Left', 'Center', 'Right'],
      columns: [
        { dataField: 'FirstName', text: 'FirstName', width: 200 },
        { dataField: 'LastName', text: 'LastName', width: 200 },
        { dataField: 'Title', text: 'Title', width: 160 },
        { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date' }
      ],
      source: dataAdapter
    }
  }

  public render() {
    const styleDivs: React.CSSProperties = {
      float: 'left',
      width: '300px'
    };
    return (
      <div>
        <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
          // @ts-ignore
          width={'100%'}
          source={this.state.source}
          sortable={true}
          columns={this.state.columns}
        />

        <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '600px', marginTop: '10px' }}>
          <div style={styleDivs}>
            <h4>Column Alignment</h4>
            <JqxDropDownList theme={'material-purple'}
              onChange={this.columnAlignmentChange}
              height={25}
              selectedIndex={0}
              autoDropDownHeight={true}
              source={this.state.alignSource}
            />
          </div>
          <div style={styleDivs}>
            <h4>Cells Alignment</h4>
            <JqxDropDownList theme={'material-purple'}
              onChange={this.cellsAlignmentChange}
              height={25}
              selectedIndex={0}
              autoDropDownHeight={true}
              source={this.state.alignSource}
            />
          </div>
        </div >

      </div>
    );
  }

  // Event handling
  private columnAlignmentChange(event: any): void {
    const index = event.args.index;
    switch (index) {
      case 0:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'align', 'left');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'align', 'left');
        this.myTreeGrid.current!.setColumnProperty('Title', 'align', 'left');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'align', 'left');
        break;
      case 1:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'align', 'center');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'align', 'center');
        this.myTreeGrid.current!.setColumnProperty('Title', 'align', 'center');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'align', 'center');
        break;
      case 2:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'align', 'right');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'align', 'right');
        this.myTreeGrid.current!.setColumnProperty('Title', 'align', 'right');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'align', 'right');
        break;
    };
  }

  private cellsAlignmentChange(event: any): void {
    const index = event.args.index;
    switch (index) {
      case 0:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'cellsAlign', 'left');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'cellsAlign', 'left');
        this.myTreeGrid.current!.setColumnProperty('Title', 'cellsAlign', 'left');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'cellsAlign', 'left');
        break;
      case 1:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'cellsAlign', 'center');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'cellsAlign', 'center');
        this.myTreeGrid.current!.setColumnProperty('Title', 'cellsAlign', 'center');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'cellsAlign', 'center');
        break;
      case 2:
        this.myTreeGrid.current!.setColumnProperty('FirstName', 'cellsAlign', 'right');
        this.myTreeGrid.current!.setColumnProperty('LastName', 'cellsAlign', 'right');
        this.myTreeGrid.current!.setColumnProperty('Title', 'cellsAlign', 'right');
        this.myTreeGrid.current!.setColumnProperty('BirthDate', 'cellsAlign', 'right');
        break;
    };
  }
}

export default App;
