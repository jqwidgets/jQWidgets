import * as React from 'react';
import { useRef, useState } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myGauge = useRef<JqxGauge>(null);

    const [border, setBorder] = useState<IGaugeProps['border']>({ visible: true });
    const [caption] = useState<IGaugeProps['caption']>({ offset: [0, -25], value: 'jQWidgets', position: 'bottom' });
    const [labels, setLabels] = useState<IGaugeProps['labels']>({ visible: true, position: 'inside' });
    const [ranges, setRanges] = useState<IGaugeProps['ranges']>([
        { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
    ]);
    const [showRanges, setShowRanges] = useState<boolean>(true);
    const [style] = useState<{ stroke: string; fill: string }>({ stroke: '#ffffff', fill: '#ffffff' });
    const [ticksMajor] = useState<IGaugeProps['ticksMajor']>({ interval: 10, size: '10%' });
    const [ticksMinor] = useState<IGaugeProps['ticksMinor']>({ interval: 5, size: '5%' });

    const showLabelsCheckboxOnChange = (event: any) => {
        setLabels(prev => {
            const updated = { ...prev, visible: event.args.checked };
            return updated;
        });
    };

    const showRangesCheckboxOnChange = (event: any) => {
        setShowRanges(event.args.checked);
    };

    const showBorderCheckboxOnChange = (event: any) => {
        setBorder({ visible: event.args.checked });
    };

    const insideRadioOnChange = (event: any) => {
        if (event.args.checked) {
            setLabels(prev => ({ ...prev, position: 'inside' }));
        }
    };

    const outsideRadioOnChange = (event: any) => {
        if (event.args.checked) {
            setLabels(prev => ({ ...prev, position: 'outside' }));
        }
    };

    return (
        <div style={{ width: '600px' }}>
            <div style={{ float: 'left' }}>
                <JqxGauge
                    ref={myGauge}
                    value={0}
                    colorScheme={'scheme04'}
                    animationDuration={1500}
                    border={border}
                    ranges={ranges}
                    ticksMinor={ticksMinor}
                    ticksMajor={ticksMajor}
                    labels={labels}
                    caption={caption}
                    showRanges={showRanges}
                    style={style}
                />
            </div>
            <JqxExpander
                theme={'material-purple'}
                style={{ float: 'right' }}
                width={200}
                showArrow={false}
                toggleMode={'none'}
            >
                <div>Options</div>
                <div>
                    <ul style={{ listStyle: 'none', padding: '0px', margin: '10px' }}>
                        <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                            <JqxCheckBox
                                theme={'material-purple'}
                                onChange={showLabelsCheckboxOnChange}
                                width={150}
                                checked={labels!.visible}
                            >
                                Show Labels
                            </JqxCheckBox>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <li>
                                    <JqxRadioButton
                                        theme={'material-purple'}
                                        onChange={insideRadioOnChange}
                                        width={150}
                                        checked={labels.position === 'inside'}
                                    >
                                        Inside the Gauge
                                    </JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton
                                        theme={'material-purple'}
                                        style={{ marginTop: '5px' }}
                                        onChange={outsideRadioOnChange}
                                        width={150}
                                        checked={labels.position === 'outside'}
                                    >
                                        Outside the Gauge
                                    </JqxRadioButton>
                                </li>
                            </ul>
                        </li>
                        <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                            <JqxCheckBox
                                theme={'material-purple'}
                                onChange={showRangesCheckboxOnChange}
                                width={150}
                                checked={showRanges}
                            >
                                Show Ranges
                            </JqxCheckBox>
                        </li>
                        <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                            <JqxCheckBox
                                theme={'material-purple'}
                                onChange={showBorderCheckboxOnChange}
                                width={150}
                                checked={border!.visible}
                            >
                                Show Border
                            </JqxCheckBox>
                        </li>
                    </ul>
                </div>
            </JqxExpander>
        </div>
    );
};

export default App;