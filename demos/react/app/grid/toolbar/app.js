import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'jsonp',
                datafields: [
                    { name: 'countryName' },
                    { name: 'name' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode' },
                    { name: 'adminName1' }
                ],
                async: false,
                url: 'http://api.geonames.org/searchJSON',
                data: {
                    featureClass: 'P',
                    style: 'full',
                    maxRows: 20,
                    username: 'jqwidgets'
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source,
            {
                formatData: (data) => {
                    if (myInput) {
                        data.name_startsWith = myInput.val();
                        return data;
                    }
                    
                }
            }
        );


        let columns =
            [
                { text: 'City', datafield: 'name', width: 170 },
                { text: 'Country Name', datafield: 'countryName', width: 200 },
                { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
            ];

        let myInput;

        let rendertoolbar = (toolbar) => {
            let container = document.createElement('div');
            container.style.margin = '5px';

            let span = document.createElement('span');
            span.style.cssText = 'float: left; margin-top: 5px; margin-right: 4px;';
            span.innerHTML = 'Search City: ';

            let inputContainer = document.createElement('div');
            inputContainer.style.float = 'left';

            container.appendChild(span);
            container.appendChild(inputContainer);
            toolbar[0].appendChild(container);

            myInput = ReactDOM.render(
                <JqxInput className='searchField' style={{ float: 'left' }}
                    width={220} height={23}
                />, inputContainer);

            let oldVal = '';

            myInput.on('keydown', (event) => {
                if (myInput.val().length >= 2) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    if (oldVal !== myInput.val()) {
                        this.timer = setTimeout(() => {
                            this.refs.myGrid.updatebounddata();
                        }, 1000);
                        oldVal = myInput.val();
                    }
                }
                else {
                    this.refs.myGrid.updatebounddata();
                }
            });
        };

        return (
            <JqxGrid ref='myGrid'
                width={850} source={dataAdapter} showtoolbar={true}
                autoheight={true} rendertoolbar={rendertoolbar} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
