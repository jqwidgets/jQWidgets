import React, { useRef, useMemo, useCallback } from 'react';
import './App.css';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const employees = useMemo(
    () => [
      { "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" },
      { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" },
      { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." },
      { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." },
      { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" },
      { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." },
      { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" },
      { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." },
      { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }
    ],
    []
  );

  const source = useMemo(
    () => ({
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
      hierarchy: {
        keyDataField: { name: 'EmployeeID' },
        parentDataField: { name: 'ReportsTo' }
      },
      id: 'EmployeeID',
      localData: employees
    }),
    [employees]
  );

  const dataAdapter = useMemo(
    () =>
      new jqx.dataAdapter(source, {
        beforeLoadComplete: (records: any[]) => {
          for (const item of records) {
            const imgUrl = 'https://www.jqwidgets.com/react/images/' + item.FirstName.toLowerCase() + '.png';
            item.icon = imgUrl;
          }
          return records;
        }
      }),
    [source]
  );

  const columnGroups = useMemo(
    () => [
      { text: 'Name', name: 'Name' }
    ],
    []
  );

  const columns = useMemo(
    () => [
      { columnGroup: 'Name', dataField: 'FirstName', text: 'FirstName', width: 200 },
      { columnGroup: 'Name', dataField: 'LastName', text: 'LastName', width: 150 },
      { dataField: 'Title', text: 'Title', width: 160 },
      { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
      { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
      { dataField: 'Address', text: 'Address', width: 200 },
      { dataField: 'City', text: 'City', width: 120 },
      { dataField: 'Country', text: 'Country' }
    ],
    []
  );

  const ready = useCallback(() => {
    setTimeout(() => {
      myTreeGrid.current?.expandRow(2);
    }, 0);
  }, []);

  return (
    <JqxTreeGrid
      theme={'material-purple'}
      ref={myTreeGrid}
      // @ts-ignore
      width={'100%'}
      source={dataAdapter}
      icons={true}
      columns={columns}
      columnGroups={columnGroups}
      ready={ready}
    />
  );
};

export default App;