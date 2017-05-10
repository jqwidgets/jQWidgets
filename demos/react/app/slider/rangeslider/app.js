import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.shop().init(this.refs.priceSlider, this.refs.displaySlider, this.refs.ramSlider, this.refs.hddSlider, this.refs.resetButton);
    }
    shop() {
        let laptops = {
            'l-1': { ram: 2, price: 510, display: 15.6, hdd: 320, model: 'Toshiba Satellite C660', marked: false },
            'l-2': { ram: 6, price: 594, display: 15.6, hdd: 500, model: 'TOSHIBA Satellite L675', marked: false },
            'l-3': { ram: 4, price: 918, display: 14.5, hdd: 500, model: 'HP Envy 14-1190', marked: false },
            'l-4': { ram: 4, price: 1165, display: 15.6, hdd: 500, model: 'Dell Vostro 3500', marked: false },
            'l-5': { ram: 12, price: 1306, display: 15.6, hdd: 750, model: 'ASUS N73JQ-A2', marked: false },
            'l-6': { ram: 8, price: 3732, display: 17, hdd: 1280, model: 'Alienware M17X', marked: false },
            'l-7': { ram: 4, price: 800, display: 17, hdd: 500, model: 'Toshiba Satellite P300-21E', marked: false },
            'l-8': { ram: 12, price: 3595, display: 18.4, hdd: 1024, model: 'ASUS NX90JQ', visible: false },
            'l-9': { ram: 2, price: 631, display: 14.1, hdd: 500, model: 'Packard Bell EasyNote', marked: false },
            'l-10': { ram: 2, price: 550, display: 13.3, hdd: 320, model: 'Lenovo ThinkPad Edge', marked: false },
            'l-11': { ram: 3, price: 529, display: 15.6, hdd: 320, model: 'Fujitsu Lifebook A531', marked: false },
            'l-12': { ram: 8, price: 2401, display: 16.5, hdd: 500, model: 'SONY VAIO F', marked: false }
        };
        let drawTable = () => {
            let catalogue = '<table class="demo-laptop-catalog-table"><tr>', counter = 0;
            for (let laptop in laptops) {
                if (laptops.hasOwnProperty(laptop)) {
                    counter += 1;
                    if (counter % 3 === 1 && counter !== 1) {
                        catalogue += '</tr><tr>';
                    }
                    catalogue += '<td class="demo-laptop-cell jqx-rc-all" id="' + laptop + '">' +
                        '<div class="demo-laptop-cell-header"><div class="demo-laptop-cell-header-content">' + laptops[laptop].model + '</div></div>' +
                        '<div class="demo-laptop-cell-content"><img src="../../images/' + laptop + '.jpg" alt="' + laptops[laptop].model + '" title="' + laptops[laptop].model + '" /></div>' +
                        '<div class="demo-laptop-cell-price jqx-rc-all">$ ' + laptops[laptop].price + '</div>' +
                        '</td>';
                }
            }
            catalogue += '</tr></table>';
            document.getElementById('catalogue').innerHTML = catalogue;
        };
        let addEventListeners = () => {
            let references = this.refs;
            for (let slider in references) {
                let currentSlider = references[slider];
                if (currentSlider.componentSelector.indexOf('jqxSlider') != -1) {
                    currentSlider.on('change', (event) => {
                        // Get name of current slider
                        let filter = slider.slice(0, slider.indexOf('Slider'));
                        handleSlide(filter, event.args.value);
                    });
                }
            }

            this.refs.resetButton.on('click', () => {
                resetFilters();
            });
        };
        let resetFilters = () => {
            this.priceSlider.setValue([this.priceSlider.min(), this.priceSlider.max()]);
            this.displaySlider.setValue([this.displaySlider.min(), this.displaySlider.max()]);
            this.hddSlider.setValue([this.hddSlider.min(), this.hddSlider.max()]);
            this.ramSlider.setValue([this.ramSlider.min(), this.ramSlider.max()]);
        };
        let handleSlide = (option, value) => {
            filterItems(updateFilter(option, value));
            setLabelValue(this[option + 'Slider'], option, value);
        };
        let setLabelValue = (slider, option, value) => {
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
            document.getElementById(option + 'Max').innerHTML = value.rangeEnd + ' ' + label;
            document.getElementById(option + 'Min').innerHTML = value.rangeStart + ' ' + label;
        };
        let filterItems = (filter) => {
            let failed = false;
            for (let laptop in laptops) {
                for (let property in filter) {
                    if (filter[property].max < laptops[laptop][property] || filter[property].min > laptops[laptop][property]) {
                        failed = true;
                    }
                }
                if (failed) {
                    if (!laptops[laptop].marked) {
                        markItem(laptop);
                    }
                } else {
                    if (laptops[laptop].marked) {
                        unmarkItem(laptop);
                    }
                }
                failed = false;
            }
        };
        //let resetItemFilter = (laptop) => {
        //    let laptopCells = $('.demo-laptop-cell');
        //    for (let i = 0; i < laptopCells.length; i += 1) {
        //        laptopCells[i].css('opacity', 1);
        //    }
        //};
        let unmarkItem = (laptop) => {
            document.getElementById(laptop).style.opacity = 1;
            laptops[laptop].marked = false;
        };
        let markItem = (laptop) => {
            document.getElementById(laptop).style.opacity = 0.5;
            laptops[laptop].marked = true;
        };
        let initSliders = (priceSlider, displaySlider, ramSlider, hddSlider, resetButton) => {
            this.priceSlider = priceSlider;
            this.displaySlider = displaySlider;
            this.ramSlider = ramSlider;
            this.hddSlider = hddSlider;
            this.resetButton = resetButton;
            buildFilter();
        };
        let buildFilter = () => {
            let priceValue = this.priceSlider.value(),
                displayValue = this.displaySlider.value(),
                ramValue = this.ramSlider.value(),
                hddValue = this.hddSlider.value();

            this.filter = {
                price: {
                    max: priceValue.rangeEnd,
                    min: priceValue.rangeStart
                },
                display: {
                    max: displayValue.rangeEnd,
                    min: displayValue.rangeStart
                },
                hdd: {
                    max: hddValue.rangeEnd,
                    min: hddValue.rangeStart
                },
                ram: {
                    max: ramValue.rangeEnd,
                    min: ramValue.rangeStart
                }
            };
        };
        let updateFilter = (option, value) => {
            this.filter[option].min = value.rangeStart;
            this.filter[option].max = value.rangeEnd;
            return this.filter;
        };
        return {
            init: (priceSlider, displaySlider, ramSlider, hddSlider, resetButton) => {
                drawTable();
                initSliders(priceSlider, displaySlider, ramSlider, hddSlider, resetButton);
                addEventListeners();
                setLabelValue(priceSlider, 'price', priceSlider.value());
                setLabelValue(displaySlider, 'display', displaySlider.value());
                setLabelValue(ramSlider, 'ram', ramSlider.value());
                setLabelValue(hddSlider, 'hdd', hddSlider.value());
            }
        };
    }
    render() {
        return (
            <div id='jqxWidget'>
                <div id='main-container' className='main-container jqx-rc-all'>
                    <div style={{ float: 'left' }}>
                        <div id='catalogue' className='catalogue jqx-rc-all'>
                        </div>
                    </div>
                    <div id='options' className='options jqx-rc-all'>
                        <div id='options-container' className='options-container'>
                            <div className='label'>
                                Price</div>
                            <div className='options-value'>
                                <div style={{ float: 'left' }} id='priceMin'>
                                </div>
                                <div style={{ float: 'right' }} id='priceMax'>
                                </div>
                            </div>
                            <br />

                            <JqxSlider ref='priceSlider'
                                showButtons={true}
                                height={30} width={180}
                                min={500} max={4000}
                                step={350} ticksFrequency={350}
                                rangeSlider={true} mode={'fixed'}
                                value={[500, 4000]}
                            />

                            <div className='label'>
                                Screen Size</div>
                            <div className='options-value'>
                                <div style={{ float: 'left' }} id='displayMin'>
                                </div>
                                <div style={{ float: 'right' }} id='displayMax'>
                                </div>
                            </div>
                            <br />

                            <JqxSlider ref='displaySlider'
                                height={30} width={180}
                                min={9} max={19}
                                step={1} ticksFrequency={1}
                                rangeSlider={true} mode={'fixed'}
                                value={[9, 19]}
                            />

                            <div className='label'>
                                RAM</div>
                            <div className='options-value'>
                                <div style={{ float: 'left' }} id='ramMin'>
                                </div>
                                <div style={{ float: 'right' }} id='ramMax'>
                                </div>
                            </div>
                            <br />

                            <JqxSlider ref='ramSlider'
                                height={30} width={180}
                                min={2} max={12}
                                step={1} ticksFrequency={1}
                                rangeSlider={true} mode={'fixed'}
                                value={[2, 12]}
                            />

                            <div className='label'>
                                HDD</div>
                            <div className='options-value'>
                                <div style={{ float: 'left' }} id='hddMin'>
                                </div>
                                <div style={{ float: 'right' }} id='hddMax'>
                                </div>
                            </div>
                            <br />

                            <JqxSlider ref='hddSlider'
                                height={30} width={180}
                                min={150} max={1500}
                                step={135} ticksFrequency={135}
                                rangeSlider={true} mode={'fixed'}
                                value={[150, 1500]}
                            />

                            <JqxButton ref='resetButton' value='Reset filters' width={100} className='resetButton' />
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}>
                    </div>
                </div>

            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
