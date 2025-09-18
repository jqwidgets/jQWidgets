import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxLinearGauge, { ILinearGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends ILinearGaugeProps {
    verticalChecked: ICheckBoxProps['checked'];
    showTicksChecked: ICheckBoxProps['checked'];
    showLabelsChecked: ICheckBoxProps['checked'];
    showRangesChecked: ICheckBoxProps['checked'];
    showBackgroundChecked: ICheckBoxProps['checked'];
}

const App = () => {
    const myLinearGauge = useRef<JqxLinearGauge>(null);
    const bothLabelsRadioButton = useRef<JqxRadioButton>(null);
    const bothTicksRadioButton = useRef<JqxRadioButton>(null);

    const [state, setState] = useState<IState>({
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
    });

    useEffect(() => {
        bothLabelsRadioButton.current?.setOptions({ checked: true });
        bothTicksRadioButton.current?.setOptions({ checked: true });
        setTimeout(() => {
            myLinearGauge.current?.setOptions({ value: 50 });
        });
    }, []);

    const isVerticalCheckboxOnChange = (event: any) => {
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
    };

    const showTicksCheckboxOnChange = (event: any) => {
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
    };

    const showLabelsCheckboxOnChange = (event: any) => {
        if (event.args.checked) {
            setState(prev => ({
                ...prev,
                labels: { visible: true, interval: 20 },
                showLabelsChecked: true
            }));
        } else {
            setState(prev => ({
                ...prev,
                labels: { visible: false },
                showLabelsChecked: false
            }));
        }
    };

    const showRangesCheckboxOnChange = (event: any) => {
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
    };

    const showBackgroundCheckboxOnChange = (event: any) => {
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
    };

    const labelsNearRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            labels: { interval: 20, position: 'near' }
        }));
    };

    const labelsFarRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            labels: { interval: 20, position: 'far' }
        }));
    };

    const labelsBothRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            labels: { interval: 20, position: 'both' }
        }));
    };

    const ticksNearRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'near'
        }));
    };

    const ticksFarRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'far'
        }));
    };

    const ticksBothRadioOnChecked = () => {
        setState(prev => ({
            ...prev,
            ticksPosition: 'both'
        }));
    };

    const showAnimationButtonOnClick = () => {
        myLinearGauge.current?.setOptions({ animationDuration: 0 });
        myLinearGauge.current?.setOptions({ value: -60 });
        myLinearGauge.current?.setOptions({ animationDuration: 1000 });
        myLinearGauge.current?.setOptions({ value: 50 });
    };

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
                                            <JqxRadioButton theme={'material-purple'} onChecked={ticksNearRadioOnChecked} groupName={'ticks-position'}>Near</JqxRadioButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} onChecked={ticksFarRadioOnChecked} groupName={'ticks-position'}>Far</JqxRadioButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <JqxRadioButton theme={'material-purple'} ref={bothTicksRadioButton} onChecked={ticksBothRadioOnChecked} groupName={'ticks