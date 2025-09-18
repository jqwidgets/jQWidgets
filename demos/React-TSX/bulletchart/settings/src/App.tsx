import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const [animationDuration, setAnimationDuration] = useState<number>(0);
    const [bothRadioChecked, setBothRadioChecked] = useState<boolean>(true);
    const [currencyRadioChecked, setCurrencyRadioChecked] = useState<boolean>(true);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledChecked, setDisabledChecked] = useState<ICheckBoxProps['checked']>(false);
    const [enableAnimationChecked, setEnableAnimationChecked] = useState<ICheckBoxProps['checked']>(false);
    const [farRadioChecked, setFarRadioChecked] = useState<IRadioButtonProps['checked']>(false);
    const [labelsFormat, setLabelsFormat] = useState<string>('c');
    const [nearRadioChecked, setNearRadioChecked] = useState<IRadioButtonProps['checked']>(false);
    const [noneRadioChecked, setNoneRadioChecked] = useState<IRadioButtonProps['checked']>(false);
    const [percentRadioChecked, setPercentRadioChecked] = useState<IRadioButtonProps['checked']>(false);
    const [pointer, setPointer] = useState<IBulletChartProps['pointer']>({
        label: 'Revenue 2019 YTD',
        size: '25%',
        value: 270
    });
    const [pointerDropDownSelected, setPointerDropDownSelected] = useState<IDropDownListProps['selectedIndex']>(4);
    const [ranges] = useState([
        { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
        { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
        { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
    ]);
    const [rtl, setRtl] = useState<boolean>(false);
    const [rtlChecked, setRtlChecked] = useState<ICheckBoxProps['checked']>(false);
    const [showLabelsChecked, setShowLabelsChecked] = useState<ICheckBoxProps['checked']>(true);
    const [source] = useState(['Black', 'Red', 'Green', 'Blue', 'From theme']);
    const [target, setTarget] = useState<IBulletChartProps['target']>({
        label: 'Revenue 2018 YTD',
        size: 4,
        value: 260
    });
    const [targetDropDownSelected, setTargetDropDownSelected] = useState<IDropDownListProps['selectedIndex']>(4);
    const [ticks, setTicks] = useState<IBulletChartProps['ticks']>({
        interval: 50,
        position: 'both',
        size: 10
    });

    const myBulletChart = useRef<JqxBulletChart>(null);
    const showLabelsCheckbox = useRef<JqxCheckBox>(null);
    const disabledCheckbox = useRef<JqxCheckBox>(null);
    const rtlCheckbox = useRef<JqxCheckBox>(null);
    const enableAnimationCheckbox = useRef<JqxCheckBox>(null);
    const nearRadio = useRef<JqxRadioButton>(null);
    const farRadio = useRef<JqxRadioButton>(null);
    const bothRadio = useRef<JqxRadioButton>(null);
    const currencyRadio = useRef<JqxRadioButton>(null);
    const percentRadio = useRef<JqxRadioButton>(null);
    const noneRadio = useRef<JqxRadioButton>(null);
    const valueSlider = useRef<JqxSlider>(null);
    const pointerDropDownList = useRef<JqxDropDownList>(null);
    const targetDropDownList = useRef<JqxDropDownList>(null);

    const showLabelsCheckboxChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setShowLabelsChecked(checked);
        if (checked) {
            nearRadio.current?.enable();
            farRadio.current?.enable();
            bothRadio.current?.enable();
            currencyRadio.current?.enable();
            percentRadio.current?.enable();
            noneRadio.current?.enable();
            if (nearRadioChecked) {
                setTicks({ position: 'near' });
            } else if (farRadioChecked) {
                setTicks({ position: 'far' });
            } else {
                setTicks({ position: 'both' });
            }
        } else {
            setTicks({ position: 'none' });
            nearRadio.current?.disable();
            farRadio.current?.disable();
            bothRadio.current?.disable();
            currencyRadio.current?.disable();
            percentRadio.current?.disable();
            noneRadio.current?.disable();
        }
    }, [nearRadioChecked, farRadioChecked]);

    const nearRadioCheckedHandler = useCallback(() => {
        if (!nearRadioChecked) {
            setNearRadioChecked(true);
            setFarRadioChecked(false);
            setBothRadioChecked(false);
            setTicks({ position: 'near' });
        }
    }, [nearRadioChecked]);

    const farRadioCheckedHandler = useCallback(() => {
        if (!farRadioChecked) {
            setNearRadioChecked(false);
            setFarRadioChecked(true);
            setBothRadioChecked(false);
            setTicks({ position: 'far' });
        }
    }, [farRadioChecked]);

    const bothRadioCheckedHandler = useCallback(() => {
        if (!bothRadioChecked) {
            setNearRadioChecked(false);
            setFarRadioChecked(false);
            setBothRadioChecked(true);
            setTicks({ position: 'both' });
        }
    }, [bothRadioChecked]);

    const currencyRadioCheckedHandler = useCallback(() => {
        if (!currencyRadioChecked) {
            setCurrencyRadioChecked(true);
            setPercentRadioChecked(false);
            setNoneRadioChecked(false);
            setLabelsFormat('c');
        }
    }, [currencyRadioChecked]);

    const percentRadioCheckedHandler = useCallback(() => {
        if (!percentRadioChecked) {
            setCurrencyRadioChecked(false);
            setPercentRadioChecked(true);
            setNoneRadioChecked(false);
            setLabelsFormat('p');
        }
    }, [percentRadioChecked]);

    const noneRadioCheckedHandler = useCallback(() => {
        if (!noneRadioChecked) {
            setCurrencyRadioChecked(false);
            setPercentRadioChecked(false);
            setNoneRadioChecked(true);
            setLabelsFormat('null');
        }
    }, [noneRadioChecked]);

    const enableAnimationCheckboxChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setEnableAnimationChecked(checked);
        setAnimationDuration(checked ? 400 : 0);
    }, []);

    const valueSliderChange = useCallback((event: any) => {
        const value = event.args.value;
        myBulletChart.current?.val(value);
    }, []);

    const pointerDropDownListChange = useCallback((event: any) => {
        if (event.args.index !== pointerDropDownSelected) {
            const choice = event.args.item.label;
            let newColor = choice !== 'From theme' ? choice : '';
            setPointer((prev) => ({
                ...prev,
                color: newColor
            }));
            setPointerDropDownSelected(event.args.index);
        }
    }, [pointerDropDownSelected]);

    const targetDropDownListChange = useCallback((event: any) => {
        if (event.args.index !== targetDropDownSelected) {
            const choice = event.args.item.label;
            let newColor = choice !== 'From theme' ? choice : '';
            setTarget((prev) => ({
                ...prev,
                color: newColor
            }));
            setTargetDropDownSelected(event.args.index);
        }
    }, [targetDropDownSelected]);

    const disabledCheckboxChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setDisabledChecked(checked);
        setDisabled(checked);
    }, []);

    const rtlCheckboxChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setRtlChecked(checked);
        setRtl(checked);
    }, []);

    React.useEffect(() => {
        if (showLabelsChecked) {
            nearRadio.current?.enable();
            farRadio.current?.enable();
            bothRadio.current?.enable();
            currencyRadio.current?.enable();
            percentRadio.current?.enable();
            noneRadio.current?.enable();
        } else {
            nearRadio.current?.disable();
            farRadio.current?.disable();
            bothRadio.current?.disable();
            currencyRadio.current?.disable();
            percent