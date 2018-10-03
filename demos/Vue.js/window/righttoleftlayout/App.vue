<template>
    <div id="jqxWidget">
        <JqxButton @click="showWindowButtonClick()"
                   :width="80">
            Show
        </JqxButton>

        <JqxWindow ref="window"
                   :width="500" :height="400"
                   :minHeight="300" :minWidth="300"
                   :resizable="true">
            <div>
                About 30 St Mary Axe
            </div>
            <div>
                <div style="direction: rtl;">
                    <img src="../../../images/building_big.jpg" alt="" class="big-image" />
                    <div>
                        <h3 style="text-align: right; direction: rtl;">30 St Mary Axe</h3>
                        <p class="important-text">
                            the Swiss Re Building (colloquially referred to as the Gherkin), is a skyscraper
                            in London's main financial district, the City of London, completed in December 2003
                            and opened at the end of May 2004. With 40 floors, the tower is 180 metres (591
                            ft) tall, and stands on the former site of the Baltic Exchange building, which was
                            severely damaged on 10 April 1992 by the explosion of a bomb placed by the Provisional
                            IRA.
                        </p>
                        <div class="more-text">
                            The building is on the former site of the Baltic Exchange building, the headquarters
                            of a global marketplace for ship sales and shipping information. On 10 April 1992
                            the Provisional IRA detonated a bomb close to the Exchange, severely damaging the
                            historic Exchange building and neighbouring structures. The UK government's statutory
                            adviser on the historic environment, English Heritage, and the City of London governing
                            body, the City of London Corporation, were keen that any redevelopment must restore
                            the building's old façade onto St Mary Axe. The Exchange Hall was a celebrated fixture
                            of the ship trading company.
                        </div>
                    </div>
                </div>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxWindow,
            JqxButton
        },
        mounted: function () {
            let jqxWidget = document.getElementById('jqxWidget');
            this.$refs.window.position = { x: jqxWidget.offsetLeft + 50, y: jqxWidget.offsetTop + 50 };
        },
        methods: {
            showWindowButtonClick: function () {
                this.$refs.window.open();
            }
        }
    }
</script>

<style>
    .big-image {
        float: left;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #999;
        background: #fff;
        padding: 3px;
    }

    .important-text {
        font-size: 13px;
        font-family: Verdana, Geneva, 'DejaVu Sans', sans-serif;
        direction: rtl;
        text-align: right;
    }

    .more-text {
        font-family: Verdana, Geneva, 'DejaVu Sans', sans-serif;
        direction: rtl;
        color: #444;
        font-size: 11px;
        font-style: italic;
        text-align: right;
    }
</style>
