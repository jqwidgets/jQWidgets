import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private myListBox = React.createRef<JqxListBox>();
    private selectionLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);

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

    public componentDidMount() {
        this.myListBox.current!.selectIndex(2);
        this.myListBox.current!.selectIndex(5);
        this.myListBox.current!.selectIndex(7);
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} ref={this.myListBox} onChange={this.onChange}
                    width={200} height={250} source={this.state.source} multiple={true} />

                <div ref={this.selectionLog} style={{ marginTop: '30px', fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private onChange(event: any): void {
        const items = this.myListBox.current!.getSelectedItems();
        let selection = 'Selected Items: ';
        for (let i = 0; i < items.length; i++) {
            selection += items[i].label + (i < items.length - 1 ? ', ' : '');
        }
        this.selectionLog.current!.innerHTML = selection;
    };
}

export default App;