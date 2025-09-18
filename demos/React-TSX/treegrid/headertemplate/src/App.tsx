import * as React from 'react';
import { useRef, useEffect, useMemo, useCallback } from 'react';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

function App() {
    const myTreeGrid = useRef<JqxTreeGrid>(null);

    const employees: any[] = [{ "BirthDate": "1952-02-19 00:00:00", "Country": "USA", "EmployeeID": 2, "HireDate": "1992-08-14 00:00:00", "Name": "Andrew Fuller", "Title": "Vice President, Sales", "children": [{ "EmployeeID": 8, "icon": "https://www.jqwidgets.com/react/images/woman.png", "Name": "Laura Callahan", "Country": "Austria", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00" }, { "EmployeeID": 1, "icon": "https://www.jqwidgets.com/react/images/woman.png", "Name": "Nancy Davolio", "Country": "Germany", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1968-12-08 00:00:00" }, { "EmployeeID": 3, "icon": "https://www.jqwidgets.com/react/images/woman.png", "Name": "Janet Leverling", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00" }, { "EmployeeID": 4, "icon": "https://www.jqwidgets.com/react/images/woman.png", "Name": "Margaret Peacock", "Country": "Canada", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00" }, { "EmployeeID": 5, "icon": "https://www.jqwidgets.com/react/images/boss.png", "Name": "Steven Buchanan", "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "expanded": "true", "children": [{ "EmployeeID": 6, "icon": "https://www.jqwidgets.com/react/images/asian.png", "Name": "Michael Suyama", "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00" }, { "EmployeeID": 7, "icon": "https://www.jqwidgets.com/react/images/person.png", "Name": "Robert King", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00" }, { "EmployeeID": 9, "icon": "https://www.jqwidgets.com/react/images/woman.png", "Name": "Anne Dodsworth", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00" }] }, { "EmployeeID": 10, "icon": "https://www.jqwidgets.com/react/images/asian.png", "Name": "Wei Zhang", "Country": "China", "Title": "Sales Manager", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1954-02-03 00:00:00", "City": "London", "Address": "14 Garrett Hill", "children": [{ "EmployeeID": 11, "icon": "https://www.jqwidgets.com/react/images/person.png", "Name": "Michael Wei", "Country": "China", "Title": "Sales Representative", "HireDate": "1996-10-17 00:00:00", "BirthDate": "1973-07-02 00:00:00" }, { "EmployeeID": 12, "icon": "https://www.jqwidgets.com/react/images/person.png", "Name": "Peter Han", "Country": "China", "Title": "Sales Representative", "HireDate": "1998-01-02 00:00:00", "BirthDate": "1970-05-29 00:00:00" }] }, { "EmployeeID": 13, "icon": "https://www.jqwidgets.com/react/images/person.png", "Name": "Chris Ferguson", "Country": "Canada", "Title": "Sales Representative", "HireDate": "2009-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00" }, { "EmployeeID": 14, "icon": "https://www.jqwidgets.com/react/images/person.png", "Name": "Antoni Brooke", "Country": "USA", "Title": "Sales Representative", "HireDate": "2010-05-03 00:00:00", "BirthDate": "1985-09-19 00:00:00" }], "expanded": "true", "icon": "https://www.jqwidgets.com/react/images/oldboss.png" }];

    const source: any = useMemo(() => ({
        dataFields: [
            { name: 'EmployeeID', type: 'number' },
            { name: 'Name', type: 'string' },
            { name: 'Country', type: 'string' },
            { name: 'City', type: 'string' },
            { name: 'Address', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'icon', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'children', type: 'array' },
            { name: 'expanded', type: 'bool' },
            { name: 'BirthDate', type: 'date' }
        ],
        dataType: 'json',
        hierarchy: { root: 'children' },
        id: 'EmployeeID',
        localData: employees
    }), []);

    const dataAdapter: any = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        {
            dataField: 'Name',
            renderer: (text: string, align: string, height: string) => {
                return "<div style='margin: 5px; margin-top: 7px;'><img width='16' height='16' style='float: left;' src='https://www.jqwidgets.com/react/images/card.png'/><span style='margin-left: 4px; float: left;'>Name</span><div style='clear: both;'></div></div>";
            },
            text: 'Name',
            width: 250
        },
        {
            dataField: 'Title',
            renderer: (text: string, align: string, height: string) => {
                return "<div style='margin: 5px; margin-top: 7px;'><img width='16' height='16' style='float: left;' src='https://www.jqwidgets.com/react/images/administrator.png'/><span style='margin-left: 4px; float: left;'>Job Title</span><div style='clear: both;'></div></div>";
            },
            text: 'Job Title',
            width: 250
        },
        {
            cellsFormat: 'd',
            dataField: 'BirthDate',
            renderer: (text: string, align: string, height: string) => {
                return "<div style='margin: 5px; margin-top: 7px;'><img width='16' height='16' style='float: left;' src='https://www.jqwidgets.com/react/images/balloons.png'/><span style='margin-left: 4px; float: left;'>Birth Date</span><div style='clear: both;'></div></div>";
            },
            text: 'Birth Date',
            width: 120
        },
        {
            cellsRenderer: (rowKey: number, dataField: any, value: any) => {
                const imgString = "<div><img width='16' height='16' style='float: left;' src='https://www.jqwidgets.com/react/images/" + value.toLowerCase() + ".png'/>";
                switch (value) {
                    case 'USA':
                        value = "United States";
                        break;
                    case 'UK':
                        value = "United Kingdom";
                        break;
                }
                const countryName = "<span style