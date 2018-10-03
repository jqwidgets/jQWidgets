<template>
    <div style="width: 300px; height: 600px; font-size: 13px; font-family: Verdana;">
        <JqxDockPanel ref="DockPanel"
                      :width="300"
                      :height="210">
            <div ref="first" dock="left" style="background: #486974;">
                First Div
            </div>
            <div ref="second" dock="top" style="height: 100px; background: #368ba7;">
                Second Div
            </div>
            <div ref="third" dock="right" style="background: #df7169;">
                Third Div
            </div>
            <div ref="fourth" style="background: #a73654;">
                Fourth Div
            </div>
        </JqxDockPanel>
        <br />
        <div>Layout Types:</div>
        <div @click="clickOnLayout($event)">
            <img title="click to apply a new layout" alt="layout types" src="../../../images/LayoutTypes.png" />
        </div>
        <br />
        <div>Spiral:</div>
        <JqxDockPanel ref="DockPanel2"
                      :width="300"
                      :height="210"
                      :lastchildfill="false">
            <div dock="left" style="background: #486974; width: 20px;">
                1
            </div>
            <div dock="top" style="background: #368ba7; height: 20px;">
                2
            </div>
            <div dock="right" style="background: #df7169; width: 20px;">
                3
            </div>
            <div dock="bottom" style="background: #a73654; height: 20px;">
                4
            </div>
        </JqxDockPanel>
    </div>
</template>
<script>
    import JqxDockPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdockpanel.vue";

    export default {
        components: {
            JqxDockPanel
        },
        mounted: function () {
            this.$refs.DockPanel.$el.style.color = 'white';
            this.$refs.DockPanel2.$el.style.color = 'white';
        },
        methods: {
            layoutOnClick: function(event) {
                let layoutsLength = 4;
                let firstElement = this.$refs.first;
                let secondElement = this.$refs.second;
                let thirdElement = this.$refs.third;
                let fourthElement = this.$refs.fourth;

                let position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);

                if (position < 55) {
                    firstElement.setAttribute('dock', 'bottom');
                    firstElement.style.height = '105px';
                    secondElement.setAttribute('dock', 'left');
                    secondElement.style.width = '100px';
                    thirdElement.setAttribute('dock', 'left');
                    thirdElement.style.width = '100px';
                    fourthElement.setAttribute('dock', 'left');
                    fourthElement.style.width = '100px';
                } else
                    if (position < 115) {
                        for (let i = 0; i < layoutsLength; i++) {
                            this.$refs.DockPanel.$el.firstChild.children[i].style.width = '100px';
                        }
                        firstElement.setAttribute('dock', 'left');
                        secondElement.setAttribute('dock', 'right');
                        thirdElement.setAttribute('dock', 'bottom');
                        thirdElement.style.height = '140px';
                        fourthElement.setAttribute('dock', 'top');
                        fourthElement.style.height = '70px';
                    } else if (position < 175) {
                        for (let i = 0; i < layoutsLength; i++) {
                            this.$refs.DockPanel.$el.firstChild.children[i].style.width = '150px';
                        }
                        firstElement.setAttribute('dock', 'left');
                        secondElement.setAttribute('dock', 'left');
                        thirdElement.setAttribute('dock', 'left');
                        fourthElement.setAttribute('dock', 'left');

                    } else if (position < 235) {
                        for (let i = 0; i < layoutsLength; i++) {
                            this.$refs.DockPanel.$el.firstChild.children[i].style.height = '70px';
                        }
                        firstElement.setAttribute('dock', 'top');
                        secondElement.setAttribute('dock', 'top');
                        thirdElement.setAttribute('dock', 'top');
                        fourthElement.setAttribute('dock', 'top');
                    }
                    else {
                        for (let i = 0; i < layoutsLength; i++) {
                            this.$refs.DockPanel.$el.firstChild.children[i].style.width = '100px';
                        }
                        firstElement.setAttribute('dock', 'left');
                        secondElement.setAttribute('dock', 'left');
                        thirdElement.setAttribute('dock', 'left');
                        fourthElement.setAttribute('dock', 'left');
                    }
            },
            clickOnLayout: function (event) {
                this.layoutOnClick(event);
                this.$refs.DockPanel.refresh();
            }
        }
    }
</script>

<style>
</style>
