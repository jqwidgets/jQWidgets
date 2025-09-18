import * as React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxLinearGauge from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import { ILinearGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';

interface IState extends ILinearGaugeProps {
    verticalChecked: ICheckBoxProps['checked'];
    showTicksChecked: ICheckBoxProps['checked'];
    showLabelsChecked: ICheckBoxProps['checked'];
    showRangesChecked: ICheckBoxProps['checked'];
    showBackgroundChecked: ICheckBoxProps['checked'];
}

const initialState: IState = {
    background: { visible: true },
    height: '300px',
    labels: { interval: 20 },
    orientation: 'vertical',
    pointer: { size: '6%' },
    ranges: [
        { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
        { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
        { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
    ],
    showBackgroundChecked: true,
    showLabelsChecked: true,
    showRanges: true,
    showRangesChecked: true,
    showTicksChecked: true,
    ticksMajor: { visible: true, interval: 10, size: '10%' },
    ticksMinor: { visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
    verticalChecked: true,
    width: '100px'
};

function App() {
    const [state, setState] = useState<IState>(initialState);
    const myLinearGauge = useRef<any>(null);
    const bothLabelsRadioButton = useRef<any>(null);
    const bothTicksRadioButton = useRef<any>(null);

    useEffect(() => {
        if (myLinearGauge.current) {
            myLinearGauge.current.setOptions({ value: 50 });
        }
        if (bothLabelsRadioButton.current) {
            bothLabelsRadioButton.current.setOptions({ checked: true });
        }
        if (bothTicksRadioButton.current) {
            bothTicksRadioButton.current.setOptions({ checked: true });
        }
    }, []);

    const isVerticalCheckboxOnChange = useCallback((event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                height: '300px',
                orientation: 'vertical',
                verticalChecked: true,
                width: '100px'
            }));
        } else {
            setState(prev => ({
                ...prev,
                height: '100px',
                orientation: 'horizontal',
                verticalChecked: false,
                width: '300px'
            }));
        }
    }, []);

    const showTicksCheckboxOnChange = useCallback((event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                showTicksChecked: true,
                ticksMajor: { visible: true, size: '10%', interval: 10 },
                ticksMinor: { visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } }
            }));
        } else {
            setState(prev => ({
                ...prev,
                showTicksChecked: false,
                ticksMajor: { visible: false },
                ticksMinor: { visible: false }
            }));
        }
    }, []);

    const showLabelsCheckboxOnChange = useCallback((event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                labels: { ...prev.labels, visible: true, interval: 20 },
                showLabelsChecked: true
            }));
        } else {
            setState(prev => ({
                ...prev,
                labels: { ...prev.labels, visible: false },
                showLabelsChecked: false
            }));
        }
    }, []);

    const showRangesCheckboxOnChange = useCallback((event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                showRanges: true,
                showRangesChecked: true
            }));
        } else {
            setState(prev => ({
                ...prev,
                showRanges: false,
                showRangesChecked: false
            }));
        }
    }, []);

    const showBackgroundCheckboxOnChange = useCallback((event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                background: { visible: true },
                showBackgroundChecked: true
            }));
        } else {
            setState(prev => ({
                ...prev,
                background: { visible: false },
                showBackgroundChecked: false
            }));
        }
    }, []);

    const labelsNearRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            labels: { ...prev.labels, interval: 20, position: 'near' }
        }));
    }, []);

    const labelsFarRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            labels: { ...prev.labels, interval: 20, position: 'far' }
        }));
    }, []);

    const labelsBothRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            labels: { ...prev.labels, interval: 20, position: 'both' }
        }));
    }, []);

    const ticksNearRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'near'
        }));
    }, []);

    const ticksFarRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'far'
        }));
    }, []);

    const ticksBothRadioOnChecked = useCallback(() => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'both'
        }));
    }, []);

    const showAnimationButtonOnClick = useCallback(() => {
        if (myLinearGauge.current) {
            myLinearGauge.current.setOptions({ animationDuration: 0 });
            myLinearGauge.current.setOptions({ value: -60 });
            myLinearGauge.current.setOptions({ animationDuration: 1000 });
            myLinearGauge.current.setOptions({ value: 50 });
        }
    }, []);

    return (
        <div>
            <JqxLinearGauge ref={myLinearGauge} style={{ marginLeft: '20px', float: 'left' }}
                width={state.width} height={state.height} orientation={state.orientation}
                ticksMajor={state.ticksMajor} ticksMinor={state.ticksMinor} max={60} background={state.background}
                labels={state.labels} showRanges={state.showRanges} pointer={state.pointer}
                ticksPosition={state.ticksPosition} colorScheme={'scheme05'} ranges={state.ranges} />
            <div style={{ marginLeft: '330px' }}>
                <JqxExpander theme={'material-purple'} width={280} height={320} toggleMode={'none'} showArrow={false}>
                    <div className="demo-options-header">Options</div>
                    <div>
                        <JqxCheckBox theme={'material-purple'} style={{ marginTop: '15px' }} onChange={isVerticalCheckboxOnChange} checked={state.verticalChecked}>Is Vertical</JqxCheckBox>
                        <br />
                        <div>
                            <table style={{ float: 'left', marginLeft: '10px' }}>
                                <tbody>
                                    <tr>
                                        <td>Labels position:</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} onChecked={labelsNearRadioOnChecked} groupName={'labels-position'}>Near</JqxRadioButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} onChecked={labelsFarRadioOnChecked} groupName={'labels-position'}>Far</JqxRadioButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} ref={bothLabelsRadioButton} onChecked={labelsBothRadioOnChecked} groupName={'labels-position'}>Both</JqxRadioButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{ float: 'right', marginRight: '10px' }}>
                                <tbody>
                                    <tr>
                                        <td>Ticks position:</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} on