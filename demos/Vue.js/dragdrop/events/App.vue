<template>
    <div class="main-container">
        <div id="draggable-parent">

            <JqxDragDrop class="draggable"
                         @dragStart="onDragStart($event)" @dragEnd="onDragEnd($event)"
                         @dropTargetEnter="onDropTargetEnter($event)" @dropTargetLeave="onDropTargetLeave($event)"
                         :restricter="restricter" :dropTarget="'.drop-target'">
                <div class="label">I can be dragged only inside my parent</div>
            </JqxDragDrop>

            <div class="drop-target">
                <div class="label">I am a drop target</div>
            </div>
        </div>

        <JqxPanel ref="myPanel" class="events" :width="260" :height="330"></JqxPanel>

    </div>
</template>

<script>
    import JqxDragDrop from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdragdrop.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxDragDrop,
            JqxPanel
        },
        data: function () {
            return {
                restricter: { left: 8, top: 8, width: 247, height: 247 }
            }
        },
        mounted: function () {
            this.centerLabels();
        },
        methods: {
            centerLabels: function () {
                let labels = document.getElementsByClassName('label');
                for (let i = 0; i < labels.length; i++) {
                    let parentHeight = labels[i].parentElement.offsetHeight;
                    let elementheight = labels[i].clientHeight;
                    let top = (parentHeight - elementheight) / 2;
                    labels[i].style.top = top + 'px';
                }
            },
            addEvent: function (type, position) {
                let left = position.left.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
                let top = position.top.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
                this.$refs.myPanel.prepend(`<div class="row">Event: ${type}, (${left}, ${top})</div>`);
            },
            onDragStart: function (event) {
                this.addEvent(event.type, event.args.position);
            },
            onDragEnd: function (event) {
                this.addEvent(event.type, event.args.position);
            },
            onDropTargetEnter: function (event) {
                this.addEvent(event.type, event.args.position);
            },
            onDropTargetLeave: function (event) {
                this.addEvent(event.type, event.args.position);
            }
        }
    };
</script>

<style>
    .row {
        padding: 1px;
    }

    .draggable > div {
        border: 1px solid #bbb;
        background-color: #C9ECFF;
        width: 100px;
        height: 100px;
        left: 30px;
        top: 50px;
        padding: 5px;
        z-index: 2;
    }

    #draggable-parent {
        background-color: #eeffee;
        width: 350px;
        height: 350px;
        text-align: center;
        border: 1px solid #eee;
        float: left;
    }

    .main-container {
        width: 650px;
        z-index: 0;
    }

    .events > div {
        float: right;
        padding: 10px;
        font-family: Tahoma;
        font-size: 13px;
    }

    .label {
        position: relative;
        font-family: Verdana;
        font-size: 11px;
        color: #000;
    }

    .drop-target {
        background-color: #FBFFB5;
        width: 150px;
        height: 150px;
        border: 1px solid #ddd;
        margin-left: 190px;
        margin-top: 70px;
        z-index: 1;
    }
</style>