import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
import JqxListBox, { IListBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IBarGaugeProps {
    source: IListBoxProps["source"];
}

function App() {
    const myBarGauge = useRef<JqxBarGauge>(null);
    const myListBox = useRef<JqxListBox>(null);

    const data = [
        { calories: '370', id: '1', name: 'Hot Chocolate' },
        { calories: '440', id: '2', name: 'Peppermint Hot Chocolate' },
        { calories: '450', id: '3', name: 'Salted Caramel Hot Chocolate' },
        { calories: '420', id: '4', name: 'White Hot Chocolate' },
        { calories: '15', id: '5', name: 'Caffe Americano' },
        { calories: '190', id: '6', name: 'Caffe Latte' },
        { calories: '330', id: '7', name: 'Caffe Mocha' }
    ];

    const sourceObj = {
        datafields: [
            { name: 'calories', type: 'int' },
            { name: 'name' }
        ],
        datatype: 'json',
        id: 'id',
        localdata: data
    };

    const [values, setValues] = useState<number[]>([450, 15, 330]);
    const [source] = useState(new jqx.dataAdapter(sourceObj));

    const getSum = (array: any[]): number => {
        array = array || [];
        let sum = 0;
        if (array.length) {
            for (const item of array) {
                sum += item;
            }
        }
        return sum;
    };

    const convertToArray = (items: any[]): number[] => {
        const preparedArray = [];
        for (const item of items) {
            preparedArray.push(item.value);
        }
        return preparedArray;
    };

    const onCheckChange = useCallback(() => {
        if (!myListBox.current) return;
        const items = myListBox.current.getCheckedItems();
        const arrayOfItems = convertToArray(items);
        const log = document.getElementById('log');
        if (log)
            log.innerHTML = '<strong>Summary calories: ' + getSum(arrayOfItems) + '</strong>';
        setValues(arrayOfItems);
    }, []);

    useEffect(() => {
        if (myListBox.current) {
            myListBox.current.checkIndex(2);
            myListBox.current.checkIndex(5);
            myListBox.current.checkIndex(6);
        }
    }, []);

    const labels: IBarGaugeProps['labels'] = {
        connectorWidth: 1,
        formatFunction: (value?: number): string => value + ' cal.',
        indent: 15,
        precision: 0
    };

    const title: IBarGaugeProps['title'] = {
        text: 'Nutritional Values'
    };

    const tooltip: IBarGaugeProps['tooltip'] = {
        formatFunction: (value: string, index: number) => {
            if (!myListBox.current) return '';
            const items = myListBox.current.getCheckedItems();
            const item = items[index];
            return item.label + ': ' + value + ' cal.';
        },
        visible: true
    };

    return (
        <div>
            <JqxBarGauge
                ref={myBarGauge}
                style={{ float: 'left' }}
                width={'100%'}
                relativeInnerRadius={0.2}
                max={500}
                values={values}
                baseValue={50}
                startAngle={0}
                endAngle={360}
                title={title}
                colorScheme={'scheme05'}
                tooltip={tooltip}
                barSpacing={9}
                animationDuration={0}
                labels={labels}
            />
            <div style={{ marginLeft: '50px', marginTop: '150px', float: 'left' }}>
                <JqxListBox
                    theme={'material-purple'}
                    ref={myListBox}
                    onCheckChange={onCheckChange}
                    width={230}
                    source={source}
                    displayMember={'name'}
                    valueMember={'calories'}
                    checkboxes={true}
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

export default App;