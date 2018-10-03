<template>
    <div>
        <JqxDateTimeInput ref="myDateTimeInput"
                          :width="300" :height="25" :formatString="'d'">
        </JqxDateTimeInput>

        <br />
        <div>
            <div style="font-family: Verdana; font-size: 13px">
                Choose Format:
            </div>
            <br />

            <JqxDropDownList @select="listOnSelect($event)"
                             :width="230" :height="25"
                             :source="availableFormats" :selectedIndex="0">
            </JqxDropDownList>

        </div>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDateTimeInput,
            JqxDropDownList
        },
        data: function () {
            return {
                availableFormats: [
                    'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
                    'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
                ]
            }
        },
        methods: {
            listOnSelect: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDateTimeInput.formatString = 'd';
                        break;
                    case 1:
                        this.$refs.myDateTimeInput.formatString = 'D';
                        break;
                    case 2:
                        this.$refs.myDateTimeInput.formatString = 't';
                        break;
                    case 3:
                        this.$refs.myDateTimeInput.formatString = 'T';
                        break;
                    case 4:
                        this.$refs.myDateTimeInput.formatString = 'f';
                        break;
                    case 5:
                        this.$refs.myDateTimeInput.formatString = 'F';
                        break;
                    case 6:
                        this.$refs.myDateTimeInput.formatString = 'M';
                        break;
                    case 7:
                        this.$refs.myDateTimeInput.formatString = 'Y';
                        break;
                    case 8:
                        this.$refs.myDateTimeInput.formatString = 'dddd-MMMM-yyyy';
                        break;
                }
            }
        }
    };
</script>

<style>
</style>