import * as React from 'react';
 


import './App.css';

import JqxToolbar, { IToolBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

class App extends React.PureComponent<{}, IToolBarProps> {
    private countries: string[] = ['Japan', 'UK', 'USA'];
    private JapaneseCities: string[] = ['Kobe', 'Kyoto', 'Tokyo'];
    private UKCities: string[] = ['Brighton', 'Glasgow', 'London'];
    private USACities: string[] = ['Boston', 'Los Angeles', 'Minneapolis'];
    private myComboBox1: any;
    private myComboBox1Min: any;
    private myComboBox2: any;
    private myComboBox2Min: any;

    constructor(props: {}) {
        super(props);

        this.state = {
            initTools: (type: any, index: any, tool: any, menuToolIninitialization: any) => {
                switch (index) {
                    case 0:
                        tool.jqxComboBox({
                            promptText: 'Select a country...',
                            selectedIndex: 0,
                            source: this.countries,
                            width: 150
                        });
                        if (menuToolIninitialization === false) {
                            this.myComboBox1 = tool;
                        } else {
                            this.myComboBox1Min = tool;
                        }
                        break;
                    case 1:
                        tool.jqxComboBox({
                            promptText: 'Select a city...',
                            selectedIndex: 0,
                            source: this.JapaneseCities,
                            width: 150
                        });
                        if (menuToolIninitialization === false) {
                            this.myComboBox2 = tool;
                        } else {
                            this.myComboBox2Min = tool;
                        }
                        break;
                }
            },
            tools: 'combobox | combobox'
        }
    }

    public componentDidMount() {
        this.myComboBox1.add(this.myComboBox1).on('select', this.selectionHandler);
        this.myComboBox1Min.add(this.myComboBox1Min).on('select', this.selectionHandler);
    }

    public render() {
        return (
            <JqxToolbar
                width={370}
                height={35}
                tools={this.state.tools}
                initTools={this.state.initTools}
            />
        );
    }

    private selectionHandler = (event: any): void => {
        if (event.args) {
            const country = event.args.item.label;
            let source;
            if (country === 'Japan') {
                source = this.JapaneseCities;
            } else if (country === 'UK') {
                source = this.UKCities;
            } else {
                source = this.USACities;
            }
            this.myComboBox2.jqxComboBox({ source });
            this.myComboBox2Min.jqxComboBox({ source });
        }
    }
}

export default App;
