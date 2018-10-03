<template>
    <div>
        <JqxTagCloud ref="myTagCloud"
            :width="600" :height="150" :source="dataAdapter"
            :displayMember="'country'" :valueMember="'rate'"
            fontSizeUnit="'px'" :minFontSize="12" :maxFontSize="20"
            minColor="'#00AA99'" :maxColor="'#FF0000'"  urlBase="'http://localhost/'">
        </JqxTagCloud>

        <div>
            <div class="text">
                <p>Sort by:</p>
                <p> Sort Direction:</p>
            </div>
            
            <JqxDropDownList ref="sortByList"
                @select="sortByListSelect($event)"
                :selectedIndex="0" :width="200" :height="25"
                :source="['none', 'label', 'value']" :autoDropDownHeight="true">
            </JqxDropDownList>
  
            <JqxDropDownList ref="sortDirection"
                @select="sortDirectionListSelect($event)"
                :selectedIndex="0" :width="200" :height="25"
                :source="['ascending', 'descending']" :autoDropDownHeight="true">
            </JqxDropDownList>
        </div>

        <div>
            <div class="text">
                <p>Minimal Weight(value) Allowed:</p>
                <p>Max number of tags:</p>
            </div>

            <JqxDropDownList ref="minValueList"
                @select="minValueListSelect($event)"
                :selectedIndex="0" :width="200" :height="25"
                :source="['0', '5', '15', '25']" :autoDropDownHeight="true">
            </JqxDropDownList>
     
            <JqxDropDownList ref="maxTagsList"
                @select="maxTagsListSelect($event)"
                :selectedIndex="0" :width="200" :height="25"
                :source="['0', '10', '15', '20']" :autoDropDownHeight="true">
            </JqxDropDownList>
        </div>


        <JqxCheckBox ref="displayTagValueCheckbox" style="margin-top: 5px"
            @change="displayTagValueCheckboxChange($event)"
            :width="200" :height="25">
            Display Tag Value
        </JqxCheckBox>

        <JqxCheckBox ref="takeTopWeightedItems"
            @change="takeTopWeightedItemsChange($event)"
            :width="200" :height="25">
            takeTopWeightedItems
        </JqxCheckBox>
    </div>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

    export default {
        components: {
            JqxTagCloud,
            JqxDropDownList,
            JqxCheckBox
        },
        beforeCreate: function () {
            const unemploymentRate =
                [
                    { 'country': 'Namibia', 'rate': 37.6 },
                    { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                    { 'country': 'Latvia', 'rate': 18.7 },
                    { 'country': 'Lithuania', 'rate': 17.8 },
                    { 'country': 'Estonia', 'rate': 16.9 },
                    { 'country': 'Serbia', 'rate': 16.6 },
                    { 'country': 'Georgia', 'rate': 16.5 },
                    { 'country': 'Yemen', 'rate': 14.6 },
                    { 'country': 'Slovak Republic', 'rate': 14.4 },
                    { 'country': 'Dominican Republic', 'rate': 14.2 },
                    { 'country': 'Tunisia', 'rate': 14.2 },
                    { 'country': 'Armenia', 'rate': 28.6 },
                    { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                    { 'country': 'Lesotho', 'rate': 25.3 },
                    { 'country': 'South Africa', 'rate': 24.7 },
                    { 'country': 'Spain', 'rate': 20.1 },
                    { 'country': 'Albania', 'rate': 13.8 },
                    { 'country': 'Ireland', 'rate': 13.6 },
                    { 'country': 'Jordan', 'rate': 12.9 },
                    { 'country': 'Greece', 'rate': 12.5 }
                ];

            const source =
                {
                    datatype: 'array',
                    localdata: unemploymentRate,
                    datafields: [
                        { name: 'country' },
                        { name: 'rate' }
                    ]
                };
                
            this.dataAdapter = new jqx.dataAdapter(source);
        },
        methods: {
            sortByListSelect: function (event) {
                const item = this.$refs.sortByList.getItem(event.args.index);
                if (item != null) {
                    this.$refs.myTagCloud.sortBy = item.label;
                }
            },
            sortDirectionListSelect: function (event) {
                const item = this.$refs.sortDirection.getItem(event.args.index);
                if (item != null) {
                    this.$refs.myTagCloud.sortOrder = item.label;
                }
            },
            minValueListSelect: function (event) {
                const item = this.$refs.minValueList.getItem(event.args.index);
                if (item != null) {
                    this.$refs.myTagCloud.minValueToDisplay = item.label;
                }
            },
            maxTagsListSelect: function (event) {
                const item = this.$refs.maxTagsList.getItem(event.args.index);
                if (item != null) {
                    if (item.label == 0) {
                        this.$refs.myTagCloud.displayLimit = null;
                    } else {
                        this.$refs.myTagCloud.displayLimit = item.label;
                    }
                }
            },
            displayTagValueCheckboxChange: function (event) {
                const checked = event.args.checked;
                this.$refs.myTagCloud.displayValue = checked;
            },
            takeTopWeightedItemsChange: function (event) {
                const checked = event.args.checked;
                this.$refs.myTagCloud.takeTopWeightedItems = checked;
            }
        }
    }
</script>

<style>
    .text p {
        width: 210px;
        display: inline-block;
        text-align: center;
        margin-bottom: 3px;
    }
    .jqx-widget {
        display: inline-block;
        margin-right: 10px;
    }
</style>