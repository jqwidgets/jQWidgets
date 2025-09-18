import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const laptopsData: any = {
    'l-1': { ram: 2, price: 510, display: 15.6, hdd: 320, model: 'Toshiba Satellite C660', marked: false },
    'l-10': { ram: 2, price: 550, display: 13.3, hdd: 320, model: 'Lenovo ThinkPad Edge', marked: false },
    'l-11': { ram: 3, price: 529, display: 15.6, hdd: 320, model: 'Fujitsu Lifebook A531', marked: false },
    'l-12': { ram: 8, price: 2401, display: 16.5, hdd: 500, model: 'SONY VAIO F', marked: false },
    'l-2': { ram: 6, price: 594, display: 15.6, hdd: 500, model: 'TOSHIBA Satellite L675', marked: false },
    'l-3': { ram: 4, price: 918, display: 14.5, hdd: 500, model: 'HP Envy 14-1190', marked: false },
    'l-4': { ram: 4, price: 1165, display: 15.6, hdd: 500, model: 'Dell Vostro 3500', marked: false },
    'l-5': { ram: 12, price: 1306, display: 15.6, hdd: 750, model: 'ASUS N73JQ-A2', marked: false },
    'l-6': { ram: 8, price: 3732, display: 17, hdd: 1280, model: 'Alienware M17X', marked: false },
    'l-7': { ram: 4, price: 800, display: 17, hdd: 500, model: 'Toshiba Satellite P300-21E', marked: false },
    'l-8': { ram: 12, price: 3595, display: 18.4, hdd: 1024, model: 'ASUS NX90JQ', visible: false },
    'l-9': { ram: 2, price: 631, display: 14.1, hdd: 500, model: 'Packard Bell EasyNote', marked: false }
};

const initialSliderState: ISliderProps = {
    height: 30,
    mode: "fixed",
    rangeSlider: true,
    showButtons: true,
    width: 180
};

const App = () => {
    const priceSlider = useRef<JqxSlider>(null);
    const displaySlider = useRef<JqxSlider>(null);
    const ramSlider = useRef<JqxSlider>(null);
    const hddSlider = useRef<JqxSlider>(null);
    const resetButton = useRef<JqxButton>(null);

    const laptopsRef = useRef<any>(JSON.parse(JSON.stringify(laptopsData)));
    const [sliderState] = useState<ISliderProps>(initialSliderState);
    const collectFiltersRef = useRef<any>({});

    const drawTable = useCallback(() => {
        let catalogue = '<table class="demo-laptop-catalog-table"><tr>';
        let counter = 0;
        const laptops = laptopsRef.current;
        for (const laptop in laptops) {
            if (laptops.hasOwnProperty(laptop)) {
                counter += 1;
                if (counter % 3 === 1 && counter !== 1) {
                    catalogue += '</tr><tr>';
                }
                catalogue += '<td class="demo-laptop-cell jqx-rc-all" id="' + laptop + '">' +
                    '<div class="demo-laptop-cell-header"><div class="demo-laptop-cell-header-content">' + laptops[laptop].model + '</div></div>' +
                    '<div class="demo-laptop-cell-content"><img src="https://www.jqwidgets.com/react/images/' + laptop + '.jpg" alt="' + laptops[laptop].model + '" title="' + laptops[laptop].model + '" /></div>' +
                    '<div class="demo-laptop-cell-price jqx-rc-all">$ ' + laptops[laptop].price + '</div>' +
                    '</td>';
            }
        }
        catalogue += '</tr></table>';
        const catalogueEl = document.getElementById('catalogue');
        if (catalogueEl) catalogueEl.innerHTML = catalogue;
    }, []);

    const setLabelValue = useCallback((slider: any, option: string, value: any) => {
        let label = '';
        switch (option) {
            case 'price': label = 'USD'; break;
            case 'hdd': label = 'GB'; break;
            case 'display': label = 'inches'; break;
            case 'ram': label = 'GB'; break;
        }
        const maxEl = document.getElementById(option + 'Max');
        const minEl = document.getElementById(option + 'Min');
        if (maxEl) maxEl.innerHTML = value.rangeEnd + ' ' + label;
        if (minEl) minEl.innerHTML = value.rangeStart + ' ' + label;
    }, []);

    const buildFilter = useCallback(() => {
        const priceValue = priceSlider.current!.getOptions("value");
        const displayValue = displaySlider.current!.getOptions("value");
        const ramValue = ramSlider.current!.getOptions("value");
        const hddValue = hddSlider.current!.getOptions("value");

        collectFiltersRef.current = {
            display: {
                max: displayValue.rangeEnd,
                min: displayValue.rangeStart
            },
            hdd: {
                max: hddValue.rangeEnd,
                min: hddValue.rangeStart
            },
            price: {
                max: priceValue.rangeEnd,
                min: priceValue.rangeStart
            },
            ram: {
                max: ramValue.rangeEnd,
                min: ramValue.rangeStart
            }
        };
    }, []);

    const filterItems = useCallback((filter: any) => {
        const laptops = laptopsRef.current;
        let failed = false;
        for (const laptop in laptops) {
            if (!!laptop) {
                for (const property in filter) {
                    if (filter[property].max < laptops[laptop][property] || filter[property].min > laptops[laptop][property]) {
                        failed = true;
                    }
                }
                const el = document.getElementById(laptop);
                if (failed) {
                    if (!laptops[laptop].marked && el) {
                        el.style.opacity = '0.5';
                        laptops[laptop].marked = true;
                    }
                } else {
                    if (laptops[laptop].marked && el) {
                        el.style.opacity = '1';
                        laptops[laptop].marked = false;
                    }
                }
                failed = false;
            }
        }
    }, []);

    const updateFilter = useCallback((option: string, value: any) => {
        const filter = collectFiltersRef.current;
        filter[option].min = value.rangeStart;
        filter[option].max = value.rangeEnd;
        return filter;
    }, []);

    const handleSlide = useCallback((option: string, value: any) => {
        filterItems(updateFilter(option, value));
        let slider;
        switch (option) {
            case 'price': slider = priceSlider; break;
            case 'display': slider = displaySlider; break;
            case 'ram': slider = ramSlider; break;
            case 'hdd': slider = hddSlider; break;
            default: slider = null;
        }
        if (slider?.current) setLabelValue(slider, option, value);
    }, [filterItems, setLabelValue, updateFilter]);

    const resetFilters = useCallback(() => {
        priceSlider.current!.setValue([priceSlider.current!.getOptions("min"), priceSlider.current!.getOptions("max")]);
        displaySlider.current!.setValue([displaySlider.current!.getOptions("min"), displaySlider.current!.getOptions("max")]);
        hddSlider.current!.setValue([hddSlider.current!.getOptions("min"), hddSlider.current!.getOptions("max")]);
        ramSlider.current!.setValue([ramSlider.current!.getOptions("min"), ramSlider.current!.getOptions("max")]);
    }, []);

    useEffect(() => {
        drawTable();
        buildFilter();
        setLabelValue(priceSlider, 'price', priceSlider.current!.getOptions("value"));
        setLabelValue(displaySlider, 'display', displaySlider.current!.getOptions("value"));
        setLabelValue(ramSlider, 'ram', ramSlider.current!.getOptions("value"));
        setLabelValue(hddSlider, 'hdd', hddSlider.current!.getOptions("value"));
    }, [drawTable, buildFilter, setLabelValue]);

