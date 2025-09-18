import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

const Field = (props: any) => (
    <tr>
        <td style={{ textAlign: "right" }}>{props.name}</td>
        <td style={{ textAlign: "left" }}>
            <JqxInput theme={'material-purple'} ref={props.reference} height={props.height} />
        </td>
    </tr>
);

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const ContentPanel = useRef<HTMLDivElement>(null);
    const CompanyName = useRef<JqxInput>(null);
    const ContactName = useRef<JqxInput>(null);
    const ContactTitle = useRef<JqxInput>(null);
    const City = useRef<JqxInput>(null);
    const Country = useRef<JqxInput>(null);

    const height = 23;

    const gridProps: IGridProps = useMemo(() => {
        const data: string = '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';
        const source: any = {
            datafields: [
                { name: 'CompanyName', type: 'string' },
                { name: 'ContactName', type: 'string' },
                { name: 'ContactTitle', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Country', type: 'string' }
            ],
            datatype: "json",
            localdata: data,
            updaterow: (rowid: any, rowdata: any, commit: any): void => {
                commit(true);
            }
        };
        const dataAdapter: any = new jqx.dataAdapter(source);
        return {
            columns: [
                { datafield: 'CompanyName', text: 'Company Name', width: 250 },
                { datafield: 'ContactName', text: 'Contact Name', width: 150 },
                { datafield: 'ContactTitle', text: 'Contact Title', width: 180 },
                { datafield: 'City', text: 'City', width: 120 },
                { datafield: 'Country', text: 'Country' }
            ],
            source: dataAdapter,
        };
    }, []);

    const rowselect = useCallback((event: any) => {
        const args = event.args;
        const row = args.row;
        CompanyName.current?.val(row.CompanyName);
        ContactName.current?.val(row.ContactName);
        ContactTitle.current?.val(row.ContactTitle);
        City.current?.val(row.City);
        Country.current?.val(row.Country);
    }, []);

    const saveClick = useCallback(() => {
        const row = myGrid.current!.getselectedrowindex();
        const rowid = myGrid.current!.getrowid(row);
        const data = {
            City: City.current!.getOptions('value'),
            CompanyName: CompanyName.current!.getOptions('value'),
            ContactName: ContactName.current!.getOptions('value'),
            ContactTitle: ContactTitle.current!.getOptions('value'),
            Country: Country.current!.getOptions('value')
        };
        myGrid.current!.updaterow(rowid, data);
    }, []);

    const expanded = useCallback(() => {
        myGrid.current?.refresh();
    }, []);

    return (
        <JqxSplitter theme={'material-purple'}
            onExpanded={expanded}
            width={850}
            height={400}
            panels={[{ min: 150, size: 330 }, { min: 250 }]}
        >
            <div>
                <JqxGrid
                    theme={'material-purple'}
                    ref={myGrid}
                    onRowselect={rowselect}
                    source={gridProps.source}
                    columns={gridProps.columns}
                />
            </div>
            <div ref={ContentPanel}>
                <form>
                    <table style={{ marginTop: 