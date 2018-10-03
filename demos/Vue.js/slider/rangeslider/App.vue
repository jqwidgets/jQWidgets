<template>
    <div class="main-container Jqx-rc-all">
        <div style="float: left">
            <div id="catalogue" class="catalogue Jqx-rc-all"></div>
        </div>
        <div id="options" class="options Jqx-rc-all">
            <div id="options-container" class="options-container">
                <div class="label">Price</div>
                <div class="options-value">
                    <div style="float: left" id="priceMin"></div>
                    <div style="float: right" id="priceMax"></div>
                </div>
                <br />
                <JqxSlider filter="price" ref="priceSlider"
                    @change="priceSliderChange($event)"
                    :width="180" :height="30" 
                    :min="500" :max="4000" :step="350"
                    :values="[500, 4000]" :showButtons="true"
                    :mode="'fixed'" :rangeSlider="true"
                    :ticksFrequency="350">
                </JqxSlider>
                <div class="label">Screen Size</div>
                <div class="options-value">
                    <div style="float: left" id="displayMin"></div>
                    <div style="float: right" id="displayMax"></div>
                </div>
                <br />
                <JqxSlider filter="display" ref="displaySlider"
                    @change="displaySliderChange($event)"
                    :width="180" :height="30" 
                    :min="9" :max="19" :step="1"
                    :values="[9, 19]" :showButtons="true"
                    :mode="'fixed'" :rangeSlider="true"
                    :ticksFrequency="1">
                </JqxSlider>
                <div class="label">RAM</div>
                <div class="options-value">
                    <div style="float: left" id="ramMin"></div>
                    <div style="float: right" id="ramMax"></div>
                </div>
                <br />
                <JqxSlider filter="ram" ref="ramSlider"
                    @change="ramSliderChange($event)"
                    :width="180" :height="30" 
                    :min="2" :max="12" :step="1"
                    :values="[2, 12]" :showButtons="true"  
                    :mode="'fixed'" :rangeSlider="true"
                    :ticksFrequency="1">
                </JqxSlider>
                <div class="label">HDD</div>
                <div class="options-value">
                    <div style="float: left" id="hddMin"></div>
                    <div style="float: right" id="hddMax"></div>
                </div>
                <br />
                <JqxSlider filter="hdd" ref="hddSlider"
                    @change="hddSliderChange($event)"
                    :width="180" :height="30" 
                    :min="150" :max="1500" :step="135"
                    :values="[150, 1500]" :showButtons="true"            
                    :mode="'fixed'" :rangeSlider="true"
                    :ticksFrequency="135">                          
                </JqxSlider>
                <JqxButton ref="resetButton" @click="clickResetButton()" class="resetButton">Reset filters</JqxButton>
            </div>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxSlider,
            JqxButton
        },
        data: function () {
            return {
                laptops: {
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
                },
                collectFilters: {},
                priceSlider: null,
                displaySlider: null,
                hddSlider: null,
                ramSlider: null
            }
        },
        mounted: function () {
            this.priceSlider = this.$refs.priceSlider;
            this.displaySlider = this.$refs.displaySlider;
            this.hddSlider = this.$refs.hddSlider;
            this.ramSlider = this.$refs.ramSlider;

            this.init();
        },
        methods: {
            init: function () {
                this.drawTable();
                this.buildFilter();
                this.setLabelValue(this.priceSlider, 'price', this.priceSlider.value);
                this.setLabelValue(this.displaySlider, 'display', this.displaySlider.value);
                this.setLabelValue(this.ramSlider, 'ram', this.ramSlider.value);
                this.setLabelValue(this.hddSlider, 'hdd', this.hddSlider.value);
            },
            drawTable: function () {
                let catalogue = '<table class="demo-laptop-catalog-table"><tr>';
                let counter = 0;

                for (let laptop in this.laptops) {
                    if (this.laptops.hasOwnProperty(laptop)) {
                        counter += 1;
                        if (counter % 3 === 1 && counter !== 1) {
                            catalogue += '</tr><tr>';
                        }
                        catalogue += '<td class="demo-laptop-cell jqx-rc-all" id="' + laptop + '">' +
                            '<div class="demo-laptop-cell-header"><div class="demo-laptop-cell-header-content">' + this.laptops[laptop].model + '</div></div>' +
                            '<div class="demo-laptop-cell-content"><img src="../../../images/' + laptop + '.jpg" alt="' + this.laptops[laptop].model + '" title="' + this.laptops[laptop].model + '" /></div>' +
                            '<div class="demo-laptop-cell-price jqx-rc-all">$ ' + this.laptops[laptop].price + '</div>' +
                            '</td>';
                    }
                }
                catalogue += '</tr></table>';
                document.querySelector('#catalogue').innerHTML = catalogue;
            },
            setLabelValue: function (slider, option, value) {
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
                document.querySelector('#' + option + 'Max').innerHTML = value.rangeEnd + ' ' + label;
                document.querySelector('#' + option + 'Min').innerHTML = value.rangeStart + ' ' + label;
            },
            handleSlide: function (option, value) {
                const updateFilter = this.updateFilter(option, value);
                this.filterItems(updateFilter);
                this.setLabelValue(this[option + 'Slider'], option, value);
            },
            filterItems: function (filter) {
                let failed = false;
                for (let laptop in this.laptops) {
                    for (let property in filter) {
                        if (filter[property].max < this.laptops[laptop][property] || filter[property].min > this.laptops[laptop][property]) {
                            failed = true;
                        }
                    }
                    if (failed) {
                        if (!this.laptops[laptop].marked) {
                            this.markItem(laptop);
                        }
                    } else {
                        if (this.laptops[laptop].marked) {
                            this.unmarkItem(laptop);
                        }
                    }
                    failed = false;
                }
            },
            resetFilters: function () {
                this.priceSlider.setValue([this.priceSlider.min, this.priceSlider.max]);
                this.displaySlider.setValue([this.displaySlider.min, this.displaySlider.max]);
                this.hddSlider.setValue([this.hddSlider.min, this.hddSlider.max]);
                this.ramSlider.setValue([this.ramSlider.min, this.ramSlider.max]);
            },
            buildFilter: function () {
                const priceValue = this.priceSlider.value,
                    displayValue = this.displaySlider.value,
                    ramValue = this.ramSlider.value,
                    hddValue = this.hddSlider.value;

                this.collectFilters = {
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
            },
            updateFilter: function (option, value) {
                this.collectFilters[option].min = value.rangeStart;
                this.collectFilters[option].max = value.rangeEnd;
                return this.collectFilters;
            },
            unmarkItem: function (laptop) {
                document.querySelector('#' + laptop).style.opacity = '1';
                this.laptops[laptop].marked = false;
            },
            markItem: function (laptop) {
                document.querySelector('#' + laptop).style.opacity = '0.5';
                this.laptops[laptop].marked = true;
            },
            priceSliderChange: function (event) {
                this.handleSlide('price', event.args.value);
            },
            displaySliderChange: function (event) {
                this.handleSlide('display', event.args.value);
            },
            ramSliderChange: function (event) {
                this.handleSlide('ram', event.args.value);
            },
            hddSliderChange: function (event) {
                this.handleSlide('hdd', event.args.value);
            },
            clickResetButton() {
                this.resetFilters();
            }
        }
    }
</script>

<style>
    .demo-laptop-catalog-table {
        table-layout: fixed;
        border-collapse: separate;
    }

    .demo-laptop-cell {
        border: 1px solid #ccc;
    }

    .demo-laptop-cell-header-content {
        top: 5px;
        position: relative;
    }

    .demo-laptop-cell-header {
        border: 0px solid #ccc;
        border-bottom-width: 1px;
        height: 20px;
        font-size: 10px;
        text-align: center;
        font-weight: bold;
        vertical-align: middle;
        background: #e3e3e3;
    }

    .demo-laptop-cell-content {
        padding-top: 5px;
    }

    .demo-laptop-cell-price {
        padding: 2px 3px 2px 3px;
        color: #fff;
        float: right;
        background: #000;
        font-weight: bold;
    }

    .catalogue {
        border: 1px solid #bbb;
        padding: 3px;
        background: #fff;
    }

    .options {
        width: 200px;
        margin-left: 5px;
        float: left;
    }

    .main-container {
        padding: 2px;
    }

    .label {
        font-size: 13px;
        font-family: Arial;
        color: #333;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 15px;
        width: 100%;
        text-align: left;
    }

    .options-value {
        font-size: 11px;
    }

    .options-container {
        padding: 10px;
        text-align: center;
    }

    .resetButton {
        margin-top: 35px;
    }
</style>