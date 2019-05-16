import * as React from 'react';
 

import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
import JqxListBox, { IListBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IBarGaugeProps {
    source: IListBoxProps["source"]
}

class App extends React.PureComponent<{}, IState> {

    private myBarGauge = React.createRef<JqxBarGauge>();
    private myListBox = React.createRef<JqxListBox>()

    constructor(props: {}) {
        super(props);
        this.onCheckChange = this.onCheckChange.bind(this);

        const data = [{
            'calories': '370',
            'id': '1',
            'name': 'Hot Chocolate'
        }, {
            'calories': '440',
            'id': '2',
            'name': 'Peppermint Hot Chocolate'

        }, {
            'calories': '450',
            'id': '3',
            'name': 'Salted Caramel Hot Chocolate'

        }, {
            'calories': '420',
            'id': '4',
            'name': 'White Hot Chocolate'
        }, {
            'calories': '15',
            'id': '5',
            'name': 'Caffe Americano'
        }, {
            'calories': '190',
            'id': '6',
            'name': 'Caffe Latte'

        }, {
            'calories': '330',
            'id': '7',
            'name': 'Caffe Mocha'
        }];

        const source = {
            datafields: [
                { name: 'calories', type: 'int' },
                { name: 'name' }
            ],
            datatype: 'json',            
            id: 'id',
            localdata: data
        };

        this.state = {
            labels: {
                connectorWidth: 1,
                formatFunction: (value?: number): string => {
                    return value + ' cal.';
                },
                indent: 15,
                precision: 0
            },
            source: new jqx.dataAdapter(source),
            title: {
                text: 'Nutritional Values'
            },
            tooltip: {
                formatFunction: (value: string, index: number) => {
                    const items = this.myListBox.current!.getCheckedItems();
                    const item = items[index];
                    return item.label + ': ' + value + ' cal.';
                },
                visible: true
            },
            values: [450, 15, 330]
        };
    }

    public componentDidMount() {
        this.myListBox.current!.checkIndex(2);
        this.myListBox.current!.checkIndex(5);
        this.myListBox.current!.checkIndex(6);
    }

    public render() {
        return (
            <div>
                <JqxBarGauge ref={this.myBarGauge} style={{ float: 'left' }}
                    // @ts-ignore
                    width={'100%'} relativeInnerRadius={0.2}
                    max={500} values={this.state.values} baseValue={50} startAngle={0} endAngle={360}
                    title={this.state.title} colorScheme={'scheme05'} tooltip={this.state.tooltip}
                    barSpacing={9} animationDuration={0} labels={this.state.labels}
                />
                <div style={{ marginLeft: '50px', marginTop: '150px', float: 'left' }}>
                    <JqxListBox theme={'material-purple'} ref={this.myListBox} onCheckChange={this.onCheckChange}
                        width={230} source={this.state.source} displayMember={'name'}
                        valueMember={'calories'} checkboxes={true}
                    />
                    <br />
                    <br />
                    <div id='log'>
                        <strong>Summary calories: 970</strong>
                    </div>
                </div>
            </div>
        );
    }

    private getSum(array: any[]): number {
        array = array || [];
        let sum = 0;
        if (array.length) {
            for (const item of array) {
                sum += item;
            }
        }
        return sum;
    }

    private convertToArray(items: any[]): number[] {
        const preparedArray = [];
        for (const item of items) {
            preparedArray.push(item.value);
        }
        return preparedArray;
    }

    private onCheckChange(): void {
        const items = this.myListBox.current!.getCheckedItems();
        const arrayOfItems = this.convertToArray(items);
        const log = document.getElementById('log');
        log!.innerHTML = '<strong>Summary calories: ' + this.getSum(arrayOfItems) + '</strong>';
        this.setState({
            values: arrayOfItems
        });
    }
}

export default App;