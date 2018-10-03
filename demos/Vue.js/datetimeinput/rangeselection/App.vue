<template>
    <div>
        <JqxDateTimeInput ref="myDateTimeInput" @change="dateOnChange()"
                          :width="250" :height="25" :selectionMode="'range'">
        </JqxDateTimeInput>

        <div ref="log" style="margin-top: 10px; font-size: 13px; font-family: Verdana"></div>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";

    export default {
        components: {
            JqxDateTimeInput
        },
        mounted: function () {
            const date1 = new Date();
            date1.setFullYear(2013, 7, 7);
            const date2 = new Date();
            date2.setFullYear(2013, 7, 15);

            this.$refs.myDateTimeInput.setRange(date1, date2);

            this.dateOnChange();
        },
        methods: {
            dateOnChange: function () {
                const selection = this.$refs.myDateTimeInput.getRange();

                if (selection.from != null) {
                    this.$refs.log.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
                }
            }
        }
    };
</script>

<style>
</style>