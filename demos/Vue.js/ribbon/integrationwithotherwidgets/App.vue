<template>
    <div>
        <div class="img-container">
            <img src="../../../images/mailIcon.png">
            <span>Inbox</span>
        </div>

        <JqxRibbon        
            :width="getWidth" :initContent="initContent" :position="'top'"
            :selectionMode="'click'":animationType="'none'">
            <ul style="border-top-left-radius: 0; border-top-right-radius: 0;">
                <li style="margin-left: 30px;">Main</li>
                <li>Social</li>
                <li>Promotions</li>
            </ul>
            <div>
                <div>
                    <div id="mainGrid" class="grid"></div>
                </div>
                <div>
                    <div id="socialGrid" class="grid"></div>
                </div>
                <div>
                    <table style="width: 100%;">
                        <tr>
                            <td style="text-align: center;">
                                No new mail under <em>Promotions</em>.<br />
                                <button id="refreshButton" title="Refresh">
                                    <img src="../../../images/refresh.png" />
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </JqxRibbon>
    </div>
</template>

<script>
    import JqxRibbon from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxribbon.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxRibbon,
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        methods: {
            initContent: function (index) {
                switch (index) {
                    case 0:
                        this.initiMainGrid();
                        break;
                    case 1:
                        this.initiSocialGrid();
                        break;
                    case 2:
                        jqwidgets.createInstance('#refreshButton', 'jqxButton', {});
                        break;
                }
            },
            initiMainGrid: function () {
                const data = [{ from: 'Anthony', subject: 'Visit to the zoo', time: '09/10/2014 12:35' }, { from: 'Peter', subject: 'Job application', time: '08/23/2014 18:13' }, { from: 'Sarah', subject: 'The roses...', time: '08/05/2014 15:01' }];

                const source =
                    {
                        datatype: 'json',
                        datafields: [
                            { name: 'from', type: 'string' },
                            { name: 'subject', type: 'string' },
                            { name: 'time', type: 'date' }
                        ],
                        localdata: data
                    };

                const mainDataAdapter = new jqx.dataAdapter(source);

                jqwidgets.createInstance('#mainGrid', 'jqxGrid', {
                    width: '100%',
                    autoheight: true,
                    source: mainDataAdapter,
                    selectionmode: 'checkbox',
                    columns: [
                        { text: 'From', datafield: 'from', width: 100 },
                        { text: 'Subject', datafield: 'subject', width: 200 },
                        { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
                    ]
                });
            },
            initiSocialGrid: function () {
                const data = [{ from: 'PhotoPics.com', subject: 'Join us today!', time: '09/08/2014 11:00' }, { from: 'CookMaster', subject: 'Welcome to the CookMaster forum.', time: '08/29/2014 22:33' }];

                const source =
                    {
                        datatype: 'json',
                        datafields: [
                            { name: 'from', type: 'string' },
                            { name: 'subject', type: 'string' },
                            { name: 'time', type: 'date' }
                        ],
                        localdata: data
                    };

                const socialDataAdapter = new jqx.dataAdapter(source);

                jqwidgets.createInstance('#socialGrid', 'jqxGrid', {
                    width: '100%',
                    autoheight: true,
                    source: socialDataAdapter,
                    selectionmode: 'checkbox',
                    columns: [
                        { text: 'From', datafield: 'from', width: 100 },
                        { text: 'Subject', datafield: 'subject', width: 240 },
                        { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
                    ]
                });
            }
        }
    }
</script>

<style>
    .img-container {
        width: 90%;
        padding: 5px 10px;
        background-color: #1C3672;
        color: white;
    }
    .img-container img {
        vertical-align: middle;
        margin-right: 10px;
    }
    .grid {
        margin-top: 3px;
        border: none;
    }
</style>