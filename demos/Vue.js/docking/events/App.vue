<template>
    <div>
        <JqxPanel ref="myPanel" style="border-width: 0; margin-left: 30px"
                  :width="getWidth" :height="50">
        </JqxPanel>

        <JqxDocking ref="myDocking" style="float: left;"
                    @dragStart="myDockingOnDragStart($event)" @dragEnd="myDockingOnDragEnd($event)"
                    :width="getWidth" :orientation="'horizontal'" :mode="'default'">
            <div>
                <div id='window0' style="height: 150px">
                    <div>CISC</div>
                    <div>
                        Before the RISC philosophy became prominent; many computer architects tried to bridge
                        the so called semantic gap; i.e. to design instruction sets that directly supported
                        high-level programming constructs such as procedure calls; loop control; and complex...
                    </div>
                </div>
                <div id='window1' style="height: 150px">
                    <div>Database management system</div>
                    <div>
                        A database management system (DBMS) is a software package with computer programs
                        that control the creation; maintenance; and the use of a database. It allows organizations
                        to conveniently develop databases...
                    </div>
                </div>
            </div>
            <div>
                <div id='window2' style="height: 150px">
                    <div>RISC</div>
                    <div>
                        Some aspects attributed to the first RISC-labeled designs around 1975 include the
                        observations that the memory-restricted compilers of the time were often unable
                        to take advantage...
                    </div>
                </div>
            </div>
        </JqxDocking>
    </div>
</template>

<script>
    import JqxDocking from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdocking.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxDocking,
            JqxPanel
        },
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        mounted: function () {
            this.$refs.myDocking.hideAllCloseButtons();
        },
        methods: {
            capitalizeFirstLetter: function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            displayEvent: function (event) {
                let windowID = event.args.window;
                let windowHeader = document.getElementById(windowID).children[0].firstChild.textContent;

                let eventData = 'Event: <span style="font-style: italic;">' + this.capitalizeFirstLetter(event.type) + '</span>';
                eventData += ' <strong>' + windowHeader + '</strong>';

                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            },
            myDockingOnDragStart: function (event) {
                this.$refs.myPanel.clearcontent();
                this.displayEvent(event);
            },
            myDockingOnDragEnd: function (event) {
                this.displayEvent(event);
            }
        }
    };
</script>

<style>
</style>