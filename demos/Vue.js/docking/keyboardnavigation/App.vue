<template>
    <div>
        <JqxDocking ref="myDocking"
            :width="getWidth" :orientation="'horizontal'" :mode="'default'" :keyboardNavigation="true">
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

        <ul>
            <li><b>Tab</b> - Once the focus is received, users will be able to use the keyboard to change the focused Docking Panel.</li>
            <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous Docking Panel.</li>
            <li><b>Esc</b> - closes the focused Docking Panel.</li>
            <li><b>Enter</b> - collapses/expands the focused Docking Panel.</li>
        </ul>
    </div>
</template>

<script>
    import JqxDocking from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdocking.vue";

    export default {
        components: {
            JqxDocking
        },
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        mounted: function () {
            this.$refs.myDocking.showAllCollapseButtons();
            this.$refs.myDocking.focus();
        }
    };
</script>

<style>
</style>