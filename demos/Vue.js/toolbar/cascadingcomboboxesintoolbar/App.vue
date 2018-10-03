<template>
    <JqxToolbar 
        :width="getWidth" :height="35"
        :tools="tools" :initTools="initTools">
    </JqxToolbar>
</template>

<script>
    import JqxToolbar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtoolbar.vue';

    export default {
        components: {
            JqxToolbar
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'combobox | combobox',
                countries: ['Japan', 'UK', 'USA'],
                JapaneseCities: ['Kobe', 'Kyoto', 'Tokyo'],
                UKCities: ['Brighton', 'Glasgow', 'London'],
                USACities: ['Boston', 'Los Angeles', 'Minneapolis'],
                myComboBox1: null,
                myComboBox1Min: null,
                myComboBox2: null,
                myComboBox2Min: null
            }
        },
        mounted: function () {
            console.log(this.myComboBox1)
            this.myComboBox1.on('select', (event) => {
                if (event.args) {
                    const country = event.args.item.label;
                    let source;

                    if (country === 'Japan') {
                        source = this.JapaneseCities;
                    } else if (country === 'UK') {
                        source = this.UKCities;
                    } else {
                        source = this.USACities;
                    }

                    this.myComboBox2.jqxComboBox({ source: source });
                    this.myComboBox2Min.jqxComboBox({ source: source });
                }
            });
        },
        methods: {
            initTools: function (type, index, tool, menuToolIninitialization) {
                switch (index) {
                    case 0:
                        tool.jqxComboBox({
                            width: 150,
                            source: this.countries,
                            selectedIndex: 0,
                            promptText: 'Select a country...'
                        });
                        if (menuToolIninitialization === false) {
                            this.myComboBox1 = tool;
                        } else {
                            this.myComboBox1Min = tool;
                        }
                        break;
                    case 1:
                        tool.jqxComboBox({
                            width: 150,
                            source: this.JapaneseCities,
                            selectedIndex: 0,
                            promptText: 'Select a city...'
                        });
                        if (menuToolIninitialization === false) {
                            this.myComboBox2 = tool;
                        } else {
                            this.myComboBox2Min = tool;
                        }
                        break;
                }
            }
        }
    }
</script>