<template>
    <JqxNavigationBar :height="'100%'"
                      :width="'100%'">
        <div>
            <div style="margin-top: 2px;">
                <div style="float: left;">
                    <img alt="Mail" src="../../../images/mailIcon.png" />
                </div>
                <div style="margin-left: 4px; float: left;">
                    Mail
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Mails</a></li>
                <li><a href="#">Notes</a></li>
            </ul>
        </div>
        <div>
            <div style="margin-top: 2px;">
                <div style="float: left;">
                    <img alt="Mail" src="../../../images/contactsIcon.png" />
                </div>
                <div style="margin-left: 4px; float: left;">
                    Contacts
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li><a href="#">Business Cards</a></li>
                <li><a href="#">Address Cards</a></li>
                <li><a href="#">Detailed Address Cards</a></li>
                <li><a href="#">Phone List</a></li>
            </ul>
        </div>
        <div>
            <div style="margin-top: 2px;">
                <div style="float: left;">
                    <img alt="Mail" src="../../../images/tasksIcon.png" />
                </div>
                <div style="margin-left: 4px; float: left;">
                    Tasks
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li><a href="#">Simple List</a></li>
                <li><a href="#">Detailed List</a></li>
                <li><a href="#">Active Tasks</a></li>
                <li><a href="#">Phone List</a></li>
            </ul>
        </div>
        <div>
            <div style="margin-top: 2px;">
                <div style="float: left;">
                    <img alt="Mail" src="../../../images/notesIcon.png" />
                </div>
                <div style="margin-left: 4px; float: left;">
                    Notes
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li><a href="#">Icons</a></li>
                <li><a href="#">Notes List</a></li>
                <li><a href="#">Last Seven Days</a></li>
            </ul>
        </div>
    </JqxNavigationBar>
</template>
<script>
    import JqxNavigationBar from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnavigationbar.vue"

    export default {
        components: {
            JqxNavigationBar
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 3px;
        box-sizing: border-box;
        margin: 0;
    }
</style>
