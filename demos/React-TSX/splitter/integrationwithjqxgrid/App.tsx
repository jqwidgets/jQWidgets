import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

const Field = (props: any) => {
    return <tr>
        <td style={{ textAlign: "right" }}>{props.name}</td>
        <td style={{ textAlign: "left" }}>
            <JqxInput theme={'material-purple'} ref={props.reference} height={props.height} />
        </td>
    </tr>;
};

class App extends React.PureComponent<{}, IGridProps> {
    private myGrid = React.createRef<JqxGrid>();
    private ContentPanel = React.createRef<HTMLDivElement>();
    private CompanyName = React.createRef<JqxInput>();
    private ContactName = React.createRef<JqxInput>();
    private ContactTitle = React.createRef<JqxInput>();
    private City = React.createRef<JqxInput>();
    private Country = React.createRef<JqxInput>();

    private height = 23;

    constructor(props: {}) {
        super(props);
        this.expanded = this.expanded.bind(this);
        this.rowselect = this.rowselect.bind(this);
        this.saveClick = this.saveClick.bind(this);        

        const data: string = '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';
        // prepare the data
        const source: any =
        {
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

        this.state = {
            columns: [
                { datafield: 'CompanyName', text: 'Company Name', width: 250 },
                { datafield: 'ContactName', text: 'Contact Name', width: 150 },
                { datafield: 'ContactTitle', text: 'Contact Title', width: 180 },
                { datafield: 'City', text: 'City', width: 120 },
                { datafield: 'Country', text: 'Country', }
            ],
            source: dataAdapter,
        }

    }

    public render() {
        return (
            <JqxSplitter theme={'material-purple'}
                onExpanded={this.expanded}
                // @ts-ignore
                width={850}
                height={400}
                panels={[{ min: 150, size: 330 }, { min: 250 }]}
            >
                <div>
                    <JqxGrid theme={'material-purple'} ref={this.myGrid}
                        onRowselect={this.rowselect}
                        source={this.state.source}
                        columns={this.state.columns}
                    />
                </div>
                <div ref={this.ContentPanel}>
                    <form>
                        <table style={{ marginTop: 20, width: "100%" }}>
                            <tbody>
                                <Field reference={this.CompanyName} name={"Company Name:"} height={this.height} />
                                <Field reference={this.ContactName} name={"Contact Name:"} height={this.height} />
                                <Field reference={this.ContactTitle} name={"Contact Title:"} height={this.height} />
                                <Field reference={this.City} name={"City:"} height={this.height} />
                                <Field reference={this.Country} name={"Country:"} height={this.height} />
                                <tr>
                                    <td />
                                    <td style={{ paddingLeft: 35, textAlign: "left" }}>
                                        <JqxButton theme={'material-purple'} onClick={this.saveClick}
                                            width={70}>
                                            Save
                                        </JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </JqxSplitter>
        );
    }

    // Event handling
    private rowselect(event: any): void {
        // event arguments.
        const args = event.args;
        // selected row.
        const row = args.row;
        // update inputs.
        this.CompanyName.current!.val(row.CompanyName);
        this.ContactName.current!.val(row.ContactName);
        this.ContactTitle.current!.val(row.ContactTitle);
        this.City.current!.val(row.City);
        this.Country.current!.val(row.Country);
    }

    private saveClick(): void {
        const row = this.myGrid.current!.getselectedrowindex();
        const rowid = this.myGrid.current!.getrowid(row);
        const data = {
            City: this.City.current!.getOptions('value'),
            CompanyName: this.CompanyName.current!.getOptions('value'),
            ContactName: this.ContactName.current!.getOptions('value'),
            ContactTitle: this.ContactTitle.current!.getOptions('value'),
            Country: this.Country.current!.getOptions('value')
        };
        this.myGrid.current!.updaterow(rowid, data);
    };

    private expanded(event: any): void {
        this.myGrid.current!.refresh();
    }
}

export default App;
