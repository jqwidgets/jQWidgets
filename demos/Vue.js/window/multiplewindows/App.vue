<template>
    <div style="width: 100%; height: 650px; border: 0px solid #ccc; margin-top: 15px;">

        <JqxButton @click="showWindowButtonClick()"
                   :width="120" style="float: left;">
            Show Windows
        </JqxButton>
        <JqxButton @click="addWindowButtonClick()"
                   :width="100" style="float: left; margin-left: 5px;">
            Add Windows
        </JqxButton>

        <div id="mainDemoContainer">
            <JqxWindow :width="300" :height="'auto'" :position="{ x: 50, y: 120 }">
                <div>RISC</div>
                <div>
                    Some aspects attributed to the first RISC-labeled designs around 1975 include the
                    observations that the memory-restricted compilers of the time were often unable
                    to take advantage of features intended to facilitate manual assembly coding, and
                    that complex addressing modes take many cycles to perform due to the required additional
                    memory accesses...
                </div>
            </JqxWindow>

            <JqxWindow :width="300" :height="'auto'" :position="{ x: 100, y: 170 }">
                <div>CISC</div>
                <div>
                    Before the RISC philosophy became prominent, many computer architects tried to bridge
                    the so called semantic gap, i.e. to design instruction sets that directly supported
                    high-level programming constructs such as procedure calls, loop control, and complex
                    addressing modes, allowing data structure and array accesses to be combined into
                    single instructions. Instructions are also typically highly encoded in order to
                    further enhance the code density...
                </div>
            </JqxWindow>

            <JqxWindow :width="300" :height="'auto'" :position="{ x: 150, y: 220 }">
                <div>Database management system</div>
                <div>
                    A database management system (DBMS) is a software package with computer programs
                    that control the creation, maintenance, and the use of a database. It allows organizations
                    to conveniently develop databases for various applications by database administrators
                    (DBAs) and other specialists. A database is an integrated collection of data records,
                    files, and other database objects...
                </div>
            </JqxWindow>
        </div>
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

        beforeCreate: function () {
            this.counter = 0;
        },
        methods: {
            showWindowButtonClick: function () {
                let windows = document.getElementsByClassName('jqx-window'),
                    count = windows.length;
                while (count) {
                    count -= 1;
                    $('#' + windows[count].id).jqxWindow('open');
                }
            },
            addWindowButtonClick: function () {
                this.counter += 1;
                let mainDemoContainer = document.getElementById('mainDemoContainer');
                let widgetContainer = document.createElement('div');
                widgetContainer.id = "win" + this.counter;
                widgetContainer.innerHTML = '<div>Header ' + this.counter + '</div>' +
                    '<div>Content of window  ' + this.counter + '</div>';

                mainDemoContainer.appendChild(widgetContainer);

                let options = { height: 150, width: 300 };
                new jqxWindow('#win' + this.counter, options);
            }
        }
    }
</script>

<style>
</style>
