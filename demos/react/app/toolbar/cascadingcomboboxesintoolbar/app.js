import React from 'react';
import ReactDOM from 'react-dom';

import JqxToolBar from '../../../jqwidgets-react/react_jqxtoolbar.js';

class App extends React.Component {
    render () {
        let countries = ['Japan', 'UK', 'USA'];
        let JapaneseCities = ['Kobe', 'Kyoto', 'Tokyo'];
        let UKCities = ['Brighton', 'Glasgow', 'London'];
        let USACities = ['Boston', 'Los Angeles', 'Minneapolis'];
        let combobox1, combobox1Min, combobox2, combobox2Min;
        let tools = 'combobox | combobox';
        let theme = ''
        let initTools = (type, index, tool, menuToolIninitialization) => {
            switch (index) {
                case 0:
                    tool.jqxComboBox({
                        width: 150,
                        source: countries,
                        selectedIndex: 0,
                        promptText: 'Select a country...'
                    });
                    if (menuToolIninitialization === false) {
                        combobox1 = tool;
                    } else {
                        combobox1Min = tool;
                    }
                    break;
                case 1:
                    tool.jqxComboBox({
                                width: 150,
                                source: JapaneseCities,
                                selectedIndex: 0,
                                promptText: 'Select a city...'
                            });
                            if (menuToolIninitialization === false) {
                                combobox2 = tool;
                            } else {
                                combobox2Min = tool;
                            }
                            break;

            }

            combobox1.add(combobox1Min).on('select', (event) => {
                if (event.args) {
                    var country = event.args.item.label;
                    var source;
                    if (country === 'Japan') {
                        source = JapaneseCities;
                    } else if (country === 'UK') {
                        source = UKCities;
                    } else {
                        source = USACities;
                    }
                    combobox2.jqxComboBox({ source: source });
                    combobox2Min.jqxComboBox({ source: source });
                }
            });
        }
        return (
            <JqxToolBar
                width={500} height={35}
                initTools={initTools} tools={tools}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
