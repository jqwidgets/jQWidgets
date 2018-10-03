<template>
        <JqxDocking ref="myDocking" style="float: left;"
            :width="getWidth" :orientation="'horizontal'" :mode="'default'">
            <div>
                <div id='window0' style="height: 200px">
                    <div>CISC</div>
                    <div>
                        Before the RISC philosophy became prominent; many computer architects tried to bridge
                        the so called semantic gap; i.e. to design instruction sets that directly supported
                        high-level programming constructs such as procedure calls; loop control; and complex...
                    </div>
                </div>
                <div id='window1' style="height: 180px">
                    <div>Database management system</div>
                    <div>
                        A database management system (DBMS) is a software package with computer programs
                        that control the creation; maintenance; and the use of a database. It allows organizations
                        to conveniently develop databases...
                    </div>
                </div>
            </div>
            <div>
                <div id='window2' style="height: 180px">
                    <div>RISC</div>
                    <div>
                        Some aspects attributed to the first RISC-labeled designs around 1975 include the
                        observations that the memory-restricted compilers of the time were often unable
                        to take advantage...
                    </div>
                </div>
            </div>
        </JqxDocking>
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
            this.$refs.myDocking.importLayout('{"panel0": {"window0":{"collapsed":false}},"panel1": {"window1":{"collapsed":false}},"floating":{"window2":{"x":"200px","y":"400","width":"350px","height":"auto","collapsed":false}},"orientation": "horizontal"}');
        }
    };
</script>

<style>
</style>