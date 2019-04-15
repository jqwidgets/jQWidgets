import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private myListBox = React.createRef<JqxListBox>();
    private select = React.createRef<HTMLSelectElement>();
    private updating: boolean = false;

    constructor(props: {}) {
        super(props);
        this.change = this.change.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    public componentDidMount() {
        this.myListBox.current!.loadFromSelect('select');
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <JqxListBox theme={'material-purple'} ref={this.myListBox} onSelect={this.selectItem}
                        width={200} height={250} />
                </div>

                <div style={{ float: 'left' }}>
                    <select ref={this.select} id="select" style={{ height: '250px', width: '200px', marginLeft: '30px' }} size={2} onChange={this.change}>
                        <option>Affogato</option>
                        <option>Americano</option>
                        <option>Bicerin</option>
                        <option>Breve</option>
                        <option>Café Bombón</option>
                        <option>Caffé Corretto</option>
                        <option>Café Crema</option>
                        <option>Caffé Latte</option>
                        <option>Caffé macchiato</option>
                        <option>Café mélange</option>
                        <option>Coffee milk</option>
                        <option>Cafe mocha</option>
                        <option>Cappuccino</option>
                        <option>Carajillo</option>
                        <option>Cuban espresso</option>
                        <option>Espresso</option>
                        <option selected={true}>The Flat White</option>
                        <option>Frappuccino</option>
                        <option>Galao</option>
                        <option>Greek frappé coffee</option>
                        <option>Iced Coffee﻿</option>
                        <option>Indian filter coffee</option>
                        <option>Instant coffee</option>
                        <option>Irish coffee</option>
                        <option>Liqueur coffee</option>
                    </select>
                </div>
            </div >
        );
    }

    private change(event: any): void {
        this.updating = true;
        const index = this.select.current!.selectedIndex;
        this.myListBox.current!.selectIndex(index);
        this.myListBox.current!.ensureVisible(index);
        this.updating = false;
    };

    private selectItem(event: any): void {
        if (event.args && !this.updating) {
            // select the item in the 'select' tag.
            const index = event.args.item.index;
            this.select.current!.selectedIndex = index;
        }
    };
}

export default App;