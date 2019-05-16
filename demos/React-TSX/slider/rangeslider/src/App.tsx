import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, ISliderProps> {
    private priceSlider = React.createRef<JqxSlider>();
    private displaySlider = React.createRef<JqxSlider>();
    private ramSlider = React.createRef<JqxSlider>();
    private hddSlider = React.createRef<JqxSlider>();
    private resetButton = React.createRef<JqxButton>();

    private laptops: any = {
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
    private collectFilters: any = {};

    constructor(props: {}) {
        super(props);

        this.priceSliderChange = this.priceSliderChange.bind(this);
        this.displaySliderChange = this.displaySliderChange.bind(this);
        this.ramSliderChange = this.ramSliderChange.bind(this);
        this.hddSliderChange = this.hddSliderChange.bind(this);
        this.clickResetButton = this.clickResetButton.bind(this);

        this.state = {
            height: 30,
            mode: "fixed",
            rangeSlider: true,
            showButtons: true,
            width: 180
        }
    }

    public componentDidMount() {
        this.shop().init(this.priceSlider, this.displaySlider, this.ramSlider, this.hddSlider, this.resetButton);
    }

    public render() {
        return (
            <div id="main-container" className="main-container jqx-rc-all">
                <div style={{ float: "left" }}>
                    <div id="catalogue" className="catalogue jqx-rc-all" />
                </div>
                <div id="options" className="options jqx-rc-all">
                    <div id="options-container" className="options-container">
                        <div className="label">
                            Price
                        </div>
                        <div className="options-value">
                            <div style={{ float: "left" }} id="priceMin" />
                            <div style={{ float: "right" }} id="priceMax" />
                        </div>
                        <br />
                        <JqxSlider theme={'material-purple'} ref={this.priceSlider}
                            onChange={this.priceSliderChange}
                            height={this.state.height}
                            width={this.state.width}
                            showButtons={this.state.showButtons}
                            max={4000}
                            min={500}
                            step={350}
                            values={[500, 4000]}
                            mode={this.state.mode}
                            rangeSlider={this.state.rangeSlider}
                            ticksFrequency={350}
                        />
                        <div className="label">
                            Screen Size
                        </div>
                        <div className="options-value">
                            <div style={{ float: "left" }} id="displayMin" />
                            <div style={{ float: "right" }} id="displayMax" />
                        </div>
                        <br />
                        <JqxSlider theme={'material-purple'} ref={this.displaySlider}
                            onChange={this.displaySliderChange}
                            height={this.state.height}
                            width={this.state.width}
                            showButtons={this.state.showButtons}
                            max={19}
                            min={9}
                            step={1}
                            values={[9, 19]}
                            mode={this.state.mode}
                            rangeSlider={this.state.rangeSlider}
                            ticksFrequency={1}
                        />
                        <div className="label">
                            RAM
                        </div>
                        <div className="options-value">
                            <div style={{ float: "left" }} id="ramMin" />
                            <div style={{ float: "right" }} id="ramMax" />
                        </div>
                        <br />
                        <JqxSlider theme={'material-purple'} ref={this.ramSlider}
                            onChange={this.ramSliderChange}
                            height={this.state.height}
                            width={this.state.width}
                            showButtons={this.state.showButtons}
                            max={12}
                            min={2}
                            step={1}
                            values={[2, 12]}
                            mode={this.state.mode}
                            rangeSlider={this.state.rangeSlider}
                            ticksFrequency={1}
                        />
                        <div className="label">
                            HDD
                        </div>
                        <div className="options-value">
                            <div style={{ float: "left" }} id="hddMin" />
                            <div style={{ float: "right" }} id="hddMax" />
                        </div>
                        <br />
                        <JqxSlider theme={'material-purple'} ref={this.hddSlider}
                            onChange={this.hddSliderChange}
                            height={this.state.height}
                            width={this.state.width}
                            showButtons={this.state.showButtons}
                            max={1500}
                            min={150}
                            step={135}
                            values={[150, 1500]}
                            mode={this.state.mode}
                            rangeSlider={this.state.rangeSlider}
                            ticksFrequency={135}
                        />
                        <JqxButton theme={'material-purple'} className="resetButton"
                            ref={this.resetButton}
                            onClick={this.clickResetButton}
                            width={100}
                        >
                            Reset filters
                        </JqxButton>
                    </div >
                </div >
                <div style={{ clear: "both" }} />
            </div >
        );
    }

    public shop() {
        const drawTable = () => {
            let catalogue = '<table class="demo-laptop-catalog-table"><tr>';
            let counter = 0;

            for (const laptop in this.laptops) {
                if (this.laptops.hasOwnProperty(laptop)) {
                    counter += 1;
                    if (counter % 3 === 1 && counter !== 1) {
                        catalogue += '</tr><tr>';
                    }
                    catalogue += '<td class="demo-laptop-cell jqx-rc-all" id="' + laptop + '">' +
                        '<div class="demo-laptop-cell-header"><div class="demo-laptop-cell-header-content">' + this.laptops[laptop].model + '</div></div>' +
                        '<div class="demo-laptop-cell-content"><img src="https://www.jqwidgets.com/react/images/' + laptop + '.jpg" alt="' + this.laptops[laptop].model + '" title="' + this.laptops[laptop].model + '" /></div>' +
                        '<div class="demo-laptop-cell-price jqx-rc-all">$ ' + this.laptops[laptop].price + '</div>' +
                        '</td>';
                }
            }
            catalogue += '</tr></table>';
            document.getElementById('catalogue')!.innerHTML = catalogue;

        };

        const resetFilters = () => {
            this.priceSlider.current!.setValue([this.priceSlider.current!.getOptions("min"), this.priceSlider.current!.getOptions("max")]);
            this.displaySlider.current!.setValue([this.displaySlider.current!.getOptions("min"), this.displaySlider.current!.getOptions("max")]);
            this.hddSlider.current!.setValue([this.hddSlider.current!.getOptions("min"), this.hddSlider.current!.getOptions("max")]);
            this.ramSlider.current!.setValue([this.ramSlider.current!.getOptions("min"), this.ramSlider.current!.getOptions("max")]);
        };

        const handleSlide = (option: any, value: any) => {
            filterItems(updateFilter(option, value));
            setLabelValue((this as any)[option + 'Slider'], option, value);
        };

        const setLabelValue = (slider: any, option: any, value: any) => {
            let label;
            switch (option) {
                case 'price':
                    label = 'USD';
                    break;
                case 'hdd':
                    label = 'GB';
                    break;
                case 'display':
                    label = 'inches';
                    break;
                case 'ram':
                    label = 'GB';
                    break;
            }
            document.getElementById(option + 'Max')!.innerHTML = value.rangeEnd + ' ' + label;
            document.getElementById(option + 'Min')!.innerHTML = value.rangeStart + ' ' + label;
        };

        const filterItems = (filter: any) => {
            let failed = false;
            for (const laptop in this.laptops) {
                if (!!laptop) {
                    for (const property in filter) {
                        if (filter[property].max < this.laptops[laptop][property] || filter[property].min > this.laptops[laptop][property]) {
                            failed = true;
                        }
                    }
                    if (failed) {
                        if (!this.laptops[laptop].marked) {
                            markItem(laptop);
                        }
                    } else {
                        if (this.laptops[laptop].marked) {
                            unmarkItem(laptop);
                        }
                    }
                    failed = false;

                }
            }
        };

        const unmarkItem = (laptop: string) => {
            document.getElementById(laptop)!.style.opacity = '1';
            this.laptops[laptop].marked = false;
        };

        const markItem = (laptop: string) => {
            document.getElementById(laptop)!.style.opacity = '0.5';
            this.laptops[laptop].marked = true;
        };

        const buildFilter = () => {
            const priceValue = this.priceSlider.current!.getOptions("value");
            const displayValue = this.displaySlider.current!.getOptions("value");
            const ramValue = this.ramSlider.current!.getOptions("value");
            const hddValue = this.hddSlider.current!.getOptions("value");

            this.collectFilters = {
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
        };

        const updateFilter = (option: any, value: any) => {
            this.collectFilters[option].min = value.rangeStart;
            this.collectFilters[option].max = value.rangeEnd;
            return this.collectFilters;
        };

        return {
            handleSlide,
            init: (priceSlider: any, displaySlider: any, ramSlider: any, hddSlider: any, resetButton: any) => {
                drawTable();
                buildFilter();
                setLabelValue(priceSlider, 'price', priceSlider.current!.getOptions("value"));
                setLabelValue(displaySlider, 'display', displaySlider.current!.getOptions("value"));
                setLabelValue(ramSlider, 'ram', ramSlider.current!.getOptions("value"));
                setLabelValue(hddSlider, 'hdd', hddSlider.current!.getOptions("value"));
            },
            resetFilters
        };
    }

    // Event handling
    private priceSliderChange(event: any): void {
        this.shop().handleSlide('price', event.args.value);
    }

    private displaySliderChange(event: any): void {
        this.shop().handleSlide('display', event.args.value);
    }

    private ramSliderChange(event: any): void {
        this.shop().handleSlide('ram', event.args.value);
    }

    private hddSliderChange(event: any): void {
        this.shop().handleSlide('hdd', event.args.value);
    }

    private clickResetButton(event: any): void {
        this.shop().resetFilters();
    }
}

export default App;
