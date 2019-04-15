import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private selectionLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onSelect = this.onSelect.bind(this);

        this.state = {
            source: [{
                group: 'Hot Chocolate',
                label: 'Peppermint Hot Chocolate',
                value: 'Chocolate Beverage'
            }, {
                group: 'Hot Chocolate',
                label: 'Salted Caramel Hot Chocolate',
                value: 'Chocolate Beverage'
            }, {
                group: 'Hot Chocolate',
                label: 'White Hot Chocolate',
                value: 'Chocolate Beverage'
            }, {
                group: 'Espresso',
                label: 'Caffe Americano',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Caffe Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Caffe Mocha',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Cappuccino',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Caramel Brulee Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Caramel Macchiato',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Peppermint Hot Chocolate',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Cinnamon Dolce Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Eggnog Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Espresso',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Espresso Con Panna',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Espresso Macchiato',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Flavored Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Gingerbread Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'White Chocolate Mocha',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Skinny Peppermint Mocha',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Skinny Flavored Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Espresso',
                label: 'Pumpkin Spice Latte',
                value: 'Espresso Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Caffe Vanilla Frappuccino',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Caffe Vanilla Frappuccino Light',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Caramel Brulee Frappuccino',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Caramel Brulee Frappuccino Light',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Eggnog Frappuccino',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Mocha Frappuccino',
                value: 'Frappuccino Blended Beverage'
            }, {
                group: 'Frappuccino',
                label: 'Tazo Green Tea Creme Frappuccino',
                value: 'Frappuccino Blended Beverage'
            }]
        }
    }

    public render() {

        return (
            <div>
                <JqxListBox theme={'material-purple'} onSelect={this.onSelect}
                    width={300} height={300} source={this.state.source} />

                <div ref={this.selectionLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private onSelect(event: any): void {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                const labelElement = document.createElement('div');

                valueElement.innerHTML = 'Value: ' + item.value;
                labelElement.innerHTML = 'Label: ' + item.label;

                const selectionLog = this.selectionLog.current!;

                selectionLog.innerHTML = '';

                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };
}

export default App;