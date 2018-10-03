<template>
    <div>
        <JqxComboBox ref="myComboBox" style="float: left; margin-top: 10px"
                     :width="200" :height="25" :source="comboBoxSource" :selectedIndex="0">
        </JqxComboBox>

        <JqxExpander style="float: left; margin-left: 100px; margin-top: 10px"
                     :width="220" :showArrow="false" :toggleMode="'none'">
            <div>Settings</div>
            <div style="padding: 10px;">
                <span>Search Type:</span>

                <div style="margin-top: 10px"></div>
                <JqxDropDownList @select="dropDownListOnSelect($event)"
                                 :width="200" :height="25" :source="dropDownListSource" :selectedIndex="0">
                </JqxDropDownList>

                <div style="margin-top: 10px;">

                    <JqxButton style="float: left; margin-right: 0.5em" :width="80"
                               @click="btnOpenOnClick()">
                        Open
                    </JqxButton>

                    <JqxButton style="float: left" :width="80"
                               @click="btnCloseOnClick()">
                        Close
                    </JqxButton>

                </div>

                <div style="clear: both"></div>
                <div style="clear: both; margin-top: 10px"></div>
                <JqxCheckBox :width="120"
                             @change="checkBoxAutoCompleteOnChange($event)">
                    Auto Complete
                </JqxCheckBox>

                <div style="margin-top: 10px"></div>
                <JqxCheckBox :width="120" :checked="true"
                             @change="checkBoxEnabledOnChange($event)">
                    Enabled
                </JqxCheckBox>

            </div>
        </JqxExpander>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxComboBox,
            JqxExpander,
            JqxDropDownList,
            JqxButton,
            JqxCheckBox
        },
        data: function () {
            return {
                comboBoxSource: [
                    'Affogato',
                    'Americano',
                    'Bicerin',
                    'Breve',
                    'Café Bombón',
                    'Café au lait',
                    'Caffé Corretto',
                    'Café Crema',
                    'Caffé Latte',
                    'Caffé macchiato',
                    'Café mélange',
                    'Coffee milk',
                    'Cafe mocha',
                    'Cappuccino',
                    'Carajillo',
                    'Cortado',
                    'Cuban espresso',
                    'Espresso',
                    'Eiskaffee',
                    'The Flat White',
                    'Frappuccino',
                    'Galao',
                    'Greek frappé coffee',
                    'Iced Coffee﻿',
                    'Indian filter coffee',
                    'Instant coffee',
                    'Irish coffee',
                    'Liqueur coffee'
                ],
                dropDownListSource: [
                    'Starts with',
                    'Starts with(Case Sensitive)',
                    'Ends with',
                    'Ends with(Case Sensitive)',
                    'Contains',
                    'Contains(Case Sensitive)',
                    'Equal',
                    'Equal(Case Sensitive)',
                ]
            }
        },
        methods: {
            btnOpenOnClick: function () {
                // show popup.
                this.$refs.myComboBox.open();
            },
            btnCloseOnClick: function () {
                // hide popup.
                this.$refs.myComboBox.close();
            },
            checkBoxAutoCompleteOnChange: function (event) {
                // set autocomplete property.
                let checked = event.args.checked;
                this.$refs.myComboBox.autoComplete = checked;
            },
            checkBoxEnabledOnChange: function (event) {
                // enable or disable.
                let checked = !event.args.checked;
                this.$refs.myComboBox.disabled = checked;
            },
            dropDownListOnSelect: function (event) {
                // set search mode.
                let searchType = '';
                switch (event.args.index) {
                    case 0:
                        searchType = 'startswithignorecase';
                        break;
                    case 1:
                        searchType = 'startswith';
                        break;
                    case 2:
                        searchType = 'endswithignorecase';
                        break;
                    case 3:
                        searchType = 'endswith';
                        break;
                    case 4:
                        searchType = 'containsignorecase';
                        break;
                    case 5:
                        searchType = 'contains';
                        break;
                    case 6:
                        searchType = 'equalsignorecase';
                        break;
                    case 7:
                        searchType = 'equals';
                        break;
                }
                this.$refs.myComboBox.searchMode = searchType;
            }
        }
    };
</script>

<style>
</style>