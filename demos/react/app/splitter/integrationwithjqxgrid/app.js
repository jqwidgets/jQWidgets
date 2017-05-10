import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jqxgrid.on('rowselect', (event) => {
            // event arguments.
            let args = event.args;
            // selected row.
            let row = event.args.row;
            // update inputs.
            this.refs.CompanyName.val(row.CompanyName);
            this.refs.ContactName.val(row.ContactName);
            this.refs.ContactTitle.val(row.ContactTitle);
            this.refs.City.val(row.City);
            this.refs.Country.val(row.Country);
        });

        this.refs.Save.on('click', () => {
            let row = this.refs.jqxgrid.getselectedrowindex();
            let rowid = this.refs.jqxgrid.getrowid(row);
            let data = {
                CompanyName: this.refs.CompanyName.val(),
                ContactName: this.refs.ContactName.val(),
                ContactTitle: this.refs.ContactTitle.val(),
                City: this.refs.City.val(),
                Country: this.refs.Country.val()
            };
            this.refs.jqxgrid.updaterow(rowid, data);
        });
    }
    render() {
        let data = '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llelet", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';
        // prepare the data
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName', type: 'string' },
                    { name: 'ContactName', type: 'string' },
                    { name: 'ContactTitle', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Country', type: 'string' }
                ],
                localdata: data,
                updaterow: (rowid, rowdata, commit) => {
                    commit(true);
                }
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        let columns = [
            { text: 'Company Name', datafield: 'CompanyName', width: 250 },
            { text: 'Contact Name', datafield: 'ContactName', width: 150 },
            { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
            { text: 'City', datafield: 'City', width: 120 },
            { text: 'Country', datafield: 'Country' }
        ];
        let styleText = { textAlign: 'right' };
        let height = 23;
        return (
            <JqxSplitter ref='mainSplitter'
                width={850} height={400}
                panels={[{ min: 150, size: 330 }, { min: 250 }]}
            >
                <div>
                    <JqxGrid ref='jqxgrid'
                        width={'100%'} height={'100%'}
                        source={dataAdapter}
                        columnsresize={true}
                        columns={columns}
                    />
                </div>
                <div id='ContentPanel'>
                    <form id='Form'>
                        <table style={{marginTop: '20px', width: '100%'}}>
                            <tr><td style={styleText}>Company Name:</td><td style={styleText}><JqxInput height={height} ref='CompanyName' /></td></tr>
                            <tr><td style={styleText}>Contact Name:</td><td style={styleText}><JqxInput height={height} ref='ContactName' /></td></tr>
                            <tr><td style={styleText}>Contact Title:</td><td style={styleText}><JqxInput height={height} ref='ContactTitle' /></td></tr>
                            <tr><td style={styleText}>City:</td><td style={styleText}><JqxInput height={height} ref='City' /></td></tr>
                            <tr><td style={styleText}>Country:</td><td style={styleText}><JqxInput height={height} ref='Country' /></td></tr>
                            <tr><td></td><td style={{ paddingLeft: '35px', textAlign: 'left' }}><JqxButton width={70} height={23} value='Save' ref='Save' /></td></tr>
                        </table>
                    </form>
                </div>
            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
