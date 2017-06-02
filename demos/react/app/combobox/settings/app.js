import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';

class App extends React.Component {
    componentDidMount() {
       this.refs.Open.on('click', () => {
           // show popup.
           this.refs.myComboBox.open();
           return false;
        });
        this.refs.Close.on('click', () => {
            // hide popup.
            this.refs.myComboBox.close();
            return false;
        });
        this.refs.Enabled.on('change', (event) => {
            // enable or disable.
            let checked = !event.args.checked;
            this.refs.myComboBox.disabled(checked);
        });
        this.refs.AutoComplete.on('change', (event) => {
            // set autocomplete property.
            let checked = event.args.checked;
            this.refs.myComboBox.autoComplete(checked);
        });
        this.refs.jqxDropDownList.on('select', (event) => {
            // set search mode.
            let searchType = '';
            switch (event.args.index) {
                case 0:
                    searchType = 'startswithignorecase';
                    break;
                case 1:
                    searchType = 'startswith';
                    break;
                case 2:
                    searchType = 'endswithignorecase';
                    break;
                case 3:
                    searchType = 'endswith';
                    break;
                case 4:
                    searchType = 'containsignorecase';
                    break;
                case 5:
                    searchType = 'contains';
                    break;
                case 6:
                    searchType = 'equalsignorecase';
                    break;
                case 7:
                    searchType = 'equals';
                    break;
            }
            this.refs.myComboBox.searchMode(searchType);
        });
    }
    render() {   
        let comboBoxSource = [
            'Affogato',
            'Americano',
            'Bicerin',
            'Breve',
            'Cafe Bombon',
            'Cafe au lait',
            'Caffe Corretto',
            'Cafe Crema',
            'Caffe Latte',
            'Caffe macchiato',
            'Cafe melange',
            'Coffee milk',
            'Cafe mocha',
            'Cappuccino',
            'Carajillo',
            'Cortado',
            'Cuban espresso',
            'Espresso',
            'Eiskaffee',
            'The Flat White',
            'Frappuccino',
            'Galao',
            'Greek frappe coffee',
            'Iced Coffee',
            'Indian filter coffee',
            'Instant coffee',
            'Irish coffee',
            'Liqueur coffee'
        ];
        let dropDownListSource = [
            'Starts with',
            'Starts with(Case Sensitive)',
            'Ends with',
            'Ends with(Case Sensitive)',
            'Contains',
            'Contains(Case Sensitive)',
            'Equal',
            'Equal(Case Sensitive)',
        ];
        return (
            <div>
                <JqxComboBox ref='myComboBox' style={{ float: 'left', marginTop: 10 }}
                    width={200} height={25} source={comboBoxSource} selectedIndex={0}
                />
                <JqxExpander ref='Settings' style={{ float: 'left', marginLeft: 100, marginTop: 10 }}
                    width={220} showArrow={false} toggleMode={'none'}>
                        <div>Settings</div>
                        <div style={{ padding: 10 }}>
                            <span>Search Type:</span>
                            <JqxDropDownList ref='jqxDropDownList' style={{ marginTop: 10 }}
                                width={200} height={25} source={dropDownListSource} selectedIndex={0}
                            />
                            <div style={{ marginTop: 10 }}>
                                <JqxButton value='Open' ref='Open' width={80} style={{ float: 'left', marginRight: '0.5em' }}  />
                                <JqxButton value='Close' ref='Close' width={80} style={{ float: 'left' }} />
                            </div>

                            <JqxCheckBox style={{ paddingTop: 10 }} ref='AutoComplete' 
                                value='Auto complete' width={120}
                            />
                            <JqxCheckBox style={{ marginTop: 10 }} ref='Enabled' 
                                value='Enabled' width={120} checked={true}
                            />
                        </div>
                </JqxExpander>
            </div>      
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
