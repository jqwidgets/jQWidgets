import * as React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const sampleData = [
    { a: 0.1535, b: 0.5 },
    { a: 0.48, b: 20.5 },
    { a: 10, b: 60 },
    { a: 100, b: 80 },
    { a: 200, b: 90 },
    { a: 245.11, b: 100.13 },
    { a: 300.13, b: 150.13 },
    { a: 340, b: 200 }
];

const initialCustomPositions = [10, 20];

function App() {
    const myChart = useRef<JqxChart>(null);
    const myCustomXAxisInput = useRef<JqxInput>(null);
    const myCustomValueAxisInput = useRef<JqxInput>(null);
    const myXAxisListBox = useRef<JqxListBox>(null);
    const myValueAxisListBox = useRef<JqxListBox>(null);

    const [dropDownListSource] = useState<IDropDownListProps['source']>([true, false, 'custom']);

    const [xAxisCustomPositions, setXAxisCustomPositions] = useState<number[]>([...initialCustomPositions]);
    const [valueAxisCustomPositions, setValueAxisCustomPositions] = useState<number[]>([...initialCustomPositions]);
    const [xAxisDropDownSelected, setXAxisDropDownSelected] = useState<IDropDownListProps["selectedIndex"]>(0);
    const [valueAxisDropDownSelected, setValueAxisDropDownSelected] = useState<IDropDownListProps["selectedIndex"]>(0);

    const [chartProps, setChartProps] = useState<IChartProps>({
        padding: { left: 5, top: 5, right: 15, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                    { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                ],
                type: 'scatter'
            }
        ],
        source: sampleData,
        title: 'Custom labels, grid lines and tick marks offsets',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            flip: false,
            gridLines: { custom: initialCustomPositions.map(v => ({ value: v })) },
            labels: { custom: initialCustomPositions.map(v => ({ value: v })), horizontalAlignment: 'right' },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            tickMarks: { custom: initialCustomPositions.map(v => ({ value: v })) }
        },
        xAxis: {
            dataField: 'a',
            flip: false,
            gridLines: { custom: initialCustomPositions.map(v => ({ value: v })), visible: true },
            labels: { custom: initialCustomPositions.map(v => ({ value: v })), visible: true },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            tickMarks: { custom: initialCustomPositions.map(v => ({ value: v })), visible: true }
        }
    });

    const refreshChart = () => {
        myChart.current?.refresh();
    };

    const dropDownLabelsVisibility_xAxisOnChange = (event: any) => {
        const value = event.args.item.value;
        const index = event.args.index;
        const newXAxis = { ...chartProps.xAxis } as any;
        newXAxis.labels = { ...newXAxis.labels, visible: value === 'false' ? false : value };
        newXAxis.gridLines = { ...newXAxis.gridLines, visible: value === 'false' ? false : value };
        newXAxis.tickMarks = { ...newXAxis.tickMarks, visible: value === 'false' ? false : value };
        setChartProps(prev => ({ ...prev, xAxis: newXAxis }));
        setXAxisDropDownSelected(index);
        setTimeout(refreshChart, 0);
    };

    const dropDownLabelsVisibility_valueAxisOnChange = (event: any) => {
        const value = event.args.item.value;
        const index = event.args.index;
        const newValueAxis = { ...chartProps.valueAxis } as any;
        newValueAxis.labels = { ...newValueAxis.labels, visible: value === 'false' ? false : value };
        newValueAxis.gridLines = { ...newValueAxis.gridLines, visible: value === 'false' ? false : value };
        newValueAxis.tickMarks = { ...newValueAxis.tickMarks, visible: value === 'false' ? false : value };
        setChartProps(prev => ({ ...prev, valueAxis: newValueAxis }));
        setValueAxisDropDownSelected(index);
        setTimeout(refreshChart, 0);
    };

    const btnAddCustomPosition_xAxisOnClick = () => {
        const value = myCustomXAxisInput.current?.getOptions('value');
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            const updatedPositions = [...xAxisCustomPositions, parsed];
            setXAxisCustomPositions(updatedPositions);
            const customOffsets = updatedPositions.map(v => ({ value: v }));
            const newXAxis = { ...chartProps.xAxis } as any;
            newXAxis.labels = { ...newXAxis.labels, custom: customOffsets };
            newXAxis.gridLines = { ...newXAxis.gridLines, custom: customOffsets };
            newXAxis.tickMarks = { ...newXAxis.tickMarks, custom: customOffsets };
            setChartProps(prev => ({ ...prev, xAxis: newXAxis }));
            setTimeout(refreshChart, 0);
        }
    };

    const btnRemoveCustomPosition_xAxisOnClick = () => {
        const idx = myXAxisListBox.current?.getOptions('selectedIndex');
        if (typeof idx !== 'number' || idx === -1) return;
        const newPositions = xAxisCustomPositions.filter((_, i) => i !== idx);
        setXAxisCustomPositions(newPositions);
        const customOffsets = newPositions.map(v => ({ value: v }));
        const newXAxis = { ...chartProps.xAxis } as any;
        newXAxis.labels = { ...newXAxis.labels, custom: customOffsets };
        newXAxis.gridLines = { ...newXAxis.gridLines, custom: customOffsets };
        newXAxis.tickMarks = { ...newXAxis.tickMarks, custom: customOffsets };
        setChartProps(prev => ({ ...prev, xAxis: newXAxis }));
        setTimeout(refreshChart, 0);
    };

    const btnAddCustomPosition_valueAxisOnClick = () => {
        const value = myCustomValueAxisInput.current?.getOptions('value');
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            const updatedPositions = [...valueAxisCustomPositions, parsed];
            setValueAxisCustomPositions(updatedPositions);
            const customOffsets = updatedPositions.map(v => ({ value: v }));
            const newValueAxis = { ...chartProps.valueAxis } as any;
            newValueAxis.labels = { ...newValueAxis.labels, custom: customOffsets };
            newValueAxis.gridLines = { ...newValueAxis.gridLines, custom: customOffsets };
            newValueAxis.tickMarks = { ...newValueAxis.tickMarks, custom: customOffsets };
            setChartProps(prev => ({ ...prev, valueAxis: newValueAxis }));
            setTimeout(refreshChart, 0);
        }
    };

    const btnRemoveCustomPosition_valueAxisOnClick = () => {
        const idx = myValueAxisListBox.current?.getOptions('selectedIndex');
        if (typeof idx !== 'number' || idx === -1) return;
        const newPositions = valueAxisCustomPositions.filter((_, i) => i !== idx);
        setValueAxisCustomPositions(newPositions);
        const customOffsets = newPositions.map(v => ({ value: v }));
        const newValueAxis = { ...chartProps.valueAxis } as any;
        newValueAxis.labels = { ...newValueAxis.labels, custom: customOffsets };
        newValueAxis.gridLines = { ...newValueAxis.gridLines, custom: customOffsets };
        newValueAxis.tickMarks = { ...newValueAxis.tickMarks, custom: customOffsets };
        setChartProps(prev => ({ ...prev, valueAxis: newValueAxis }));
        setTimeout(refreshChart, 0);
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={chartProps.title}
                enableAnimations={false}
                padding={chartProps.padding}
                titlePadding={chartProps.titlePadding}
               