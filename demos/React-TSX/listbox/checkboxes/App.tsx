import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private myListBox = React.createRef<JqxListBox>();
    private events = React.createRef<HTMLDivElement>();
    private checkedItems = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onCheckChange = this.onCheckChange.bind(this);

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
        this.myListBox.current!.checkIndex(0);
        this.myListBox.current!.checkIndex(1);
        this.myListBox.current!.checkIndex(2);
        this.myListBox.current!.checkIndex(5);
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} ref={this.myListBox} onCheckChange={this.onCheckChange}
                    width={200} height={250} source={this.state.source} checkboxes={true} />

                <div ref={this.events} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
                <div ref={this.checkedItems} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
            </div>
        );
    }

    private onCheckChange(event: any): void {
        const eventsContainer = this.events.current!;
        const checkedItemsContainer = this.checkedItems.current!;

        if (event.args.checked) {
            eventsContainer.innerHTML = 'Checked: ' + event.args.label;
        }
        else {
            eventsContainer.innerHTML = 'Unchecked: ' + event.args.label;
        }

        const items = this.myListBox.current!.getCheckedItems();
        let checkedItems = '';
        for (let i = 0; i < items.length; i++) {
            if (i < items.length - 1) {
                checkedItems += items[i].label + ', ';
            }
            else {
                checkedItems += items[i].label;
            }
        }

        checkedItemsContainer.innerHTML = checkedItems;
    };
}

export default App;