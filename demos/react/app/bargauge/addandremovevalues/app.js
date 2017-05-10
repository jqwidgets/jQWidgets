import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.checkIndex(2);
        this.refs.myListBox.checkIndex(5);
        this.refs.myListBox.checkIndex(6);

        this.refs.myListBox.on('checkChange', (e) => {
            let items = this.refs.myListBox.getCheckedItems();
            let arrayOfItems = this.convertToArray(items);
            document.getElementById('log').innerHTML = '<strong>Summary calories: ' + this.getSum(arrayOfItems) + '</strong>';
            this.refs.myBarGauge.val(arrayOfItems);
        });
    }

    convertToArray(items) {
        let preparedArray = new Array(items.length);
        for (let i = 0; i < items.length; i += 1) {
            preparedArray[i] = items[i].value;
        }
        return preparedArray;
    }
    getSum(array) {
        array = array || [];
        let sum = 0;
        if (!!array.length) {
            for (let i = 0; i < array.length; i += 1) {
                sum += array[i];
            }
        }
        return sum;
    }
    render() {
        let data =
            [{
                'id': '1',
                'name': 'Hot Chocolate',
                'calories': '370'
            }, {
                'id': '2',
                'name': 'Peppermint Hot Chocolate',
                'calories': '440'
            }, {
                'id': '3',
                'name': 'Salted Caramel Hot Chocolate',
                'calories': '450'
            }, {
                'id': '4',
                'name': 'White Hot Chocolate',
                'calories': '420'
            }, {
                'id': '5',
                'name': 'Caffe Americano',
                'calories': '15'
            }, {
                'id': '6',
                'name': 'Caffe Latte',
                'calories': '190'
            }, {
                'id': '7',
                'name': 'Caffe Mocha',
                'calories': '330'
            }];
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name' },
                    { name: 'calories', type: 'int' }
                ],
                id: 'id',
                localdata: data
            };
        let dataAdapter = new $.jqx.dataAdapter(source);

        let tooltip =
            {
                visible: true,
                formatFunction: (value, index) => {
                    let items = this.refs.myListBox.getCheckedItems();
                    let item = items[index];
                    return item.label + ': ' + value + ' cal.';
                }
            }
        let labels =
            {
                formatFunction: (value) => {
                    return value + ' cal.';
                },
                precision: 0,
                indent: 15,
                connectorWidth: 1
            }

        return (
            <div>
                <JqxBarGauge ref='myBarGauge' style={{ float: 'left' }}
                    width={600} height={600} title={'Nutritional Values'} max={500}
                    colorScheme={'scheme05'} values={[450, 190, 330]} baseValue={50}
                    barSpacing={9} animationDuration={0} relativeInnerRadius={0.2}
                    startAngle={0} endAngle={360} tooltip={tooltip} labels={labels}
                />
                <div style={{ marginLeft: 50, marginTop: 150, float: 'left' }}>
                    <JqxListBox ref='myListBox'
                        width={230} source={dataAdapter} checkboxes={true}
                        displayMember={'name'} valueMember={'calories'}
                    />
                    <br />
                    <br />
                    <div id='log'><strong>Summary calories: 970 </strong></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
