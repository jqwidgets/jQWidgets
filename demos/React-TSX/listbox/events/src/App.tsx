import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}, IListBoxProps> {

    private myListBox = React.createRef<JqxListBox>();
    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);

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
                <JqxListBox theme={'material-purple'} ref={this.myListBox} style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}
                    onSelect={this.onSelect} onUnselect={this.onUnselect}
                    width={200} height={250}source={this.state.source} />

                <div style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ border: 'none' }} width={200} height={250} />
                    </div>
                </div>
            </div>
        );
    }

    private onSelect(event: any): void {
        const item = this.myListBox.current!.getItem(event.args.index);
        if (item != null) {
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        }
    }

    private onUnselect(event: any): void {
        const item = this.myListBox.current!.getItem(event.args.index);
        if (item != null) {
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
        }
    }
}

export default App;