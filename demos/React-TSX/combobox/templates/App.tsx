import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

class App extends React.PureComponent<{}, IComboBoxProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            source: [
                'Affogato',
                'Americano',
                'Bicerin',
                'Breve',
                'Café Bombón',
                'Café au lait',
                'Caffé Corretto',
                'Café Crema',
                'Caffé Latte',
                'Caffé macchiato',
                'Café mélange',
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
                'Greek frappé coffee',
                'Iced Coffee﻿',
                'Indian filter coffee',
                'Instant coffee',
                'Irish coffee',
                'Liqueur coffee'
            ]
        }
    }

    public render() {
        return (
            <div>
                <div>Default</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} />
                <br />
                <div>Primary</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} template={'primary'} />
                <br />
                <div>Success</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} template={'success'} />
                <br />
                <div>Info</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} template={'info'} />
                <br />
                <div>Warning</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} template={'warning'} />
                <br />
                <div>Danger</div>
                <JqxComboBox theme={'material-purple'}
                    width={200} height={30} source={this.state.source}
                    selectedIndex={1} template={'danger'} />
            </div>
        );
    }
}

export default App;