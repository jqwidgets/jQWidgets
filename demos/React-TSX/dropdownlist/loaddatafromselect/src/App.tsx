import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDropDownListProps> {

    private myDropDownList = React.createRef<JqxDropDownList>();
    private mySelect = React.createRef<HTMLSelectElement>();
    private updating: boolean = false;

    constructor(props: {}) {
        super(props);
        this.listOnSelect = this.listOnSelect.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);

        this.state = {
            selectedIndex: 0
        }
    }

    public componentDidMount() {
        this.myDropDownList.current!.loadFromSelect('select');
    }

    public render() {
        return (
            <div>
                <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} style={{ float: 'left' }}
                    onSelect={this.listOnSelect} width={200} height={30} selectedIndex={this.state.selectedIndex} />

                <div style={{ float: 'left' }}>
                    <select ref={this.mySelect} id="select" onChange={this.onSelectChange} style={{ height: '25px', width: '200px', marginLeft: '30px' }}>
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
                        <option>The Flat White</option>
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
            </div>
        );
    }

    private listOnSelect(event: any): void {
        if (event.args && !this.updating) {
            const index = event.args.item.index;
            this.mySelect.current!.selectedIndex = index;
        }
    }

    private onSelectChange() {
        this.updating = true;
        const index = this.mySelect.current!.selectedIndex;
        this.setState({
            selectedIndex: index
        }, () => {
            this.myDropDownList.current!.ensureVisible(index);
            this.updating = false;
        });       
    }
}

export default App;