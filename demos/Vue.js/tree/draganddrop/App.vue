<template>
    <div>
        <div>
            <JqxTree ref="myTreeA" style="float: left;"
                     @dragStart="dragStartTreeA($event)" @dragEnd="dragEndTreeA($event)"
                     :width="220" :height="330" :dragStart="dragStart" 
                     :allowDrop="true" :allowDrag="true">
                <ul>
                    <li item-selected="true">Home</li>
                    <li item-expanded="true">
                        Solutions
                        <ul>
                            <li>Education</li>
                        </ul>
                    </li>
                    <li>Financial services</li>
                    <li>Community</li>
                </ul>
            </JqxTree>

            <JqxTree ref="myTreeB" style="float: left; margin-left: 20px;"
                     @dragStart="dragStartTreeB($event)" @dragEnd="dragEndTreeB($event)"
                     :width="220" :height="330" :dragEnd="dragEnd"
                     :allowDrag="true" :allowDrop="true">
                <ul>
                    <li>
                        Products
                    </li>
                    <li item-expanded="true">
                        Support
                        <ul>
                            <li>Support home</li>
                            <li>Customer Service</li>
                        </ul>
                    </li>
                    <li>Knowledge base</li>
                    <li>Forum</li>
                </ul>
            </JqxTree>

            <div style="width: 200px; height: 200px; float: left; margin-left: 20px;">
                <textarea rows="5" ref="myTextArea"></textarea>
            </div>
        </div>

        <div style="font-size: 13px; font-family: Verdana; padding-top: 20px; clear: both;">
            <b>Events Log:</b>
            <div ref="dragStartLog">
            </div>
            <div ref="dragEndLog">
            </div>
            <br />
            <b>Note:</b>
            <br />
            Dragging of "Community" is disabled.
            <br />
            Dropping of "Forum" is disabled.
        </div>
    </div>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';

    export default {
        components: {
            JqxTree
        },    
        methods: {
            onDragStart: function (event) {
                this.$refs.dragStartLog.innerText = 'Drag Start: ' + event.args.label;
                this.$refs.dragEndLog.innerText = '';
            },
            onDragEnd: function (event) {
                this.$refs.dragEndLog.innerText = 'Drag End';
                if (event.args.label) {
                    const ev = event.args.originalEvent;
                    let x = ev.pageX;
                    let y = ev.pageY;

                    if (ev && ev.originalEvent && ev.originalEvent.touches) {
                        const touch = ev.originalEvent.changedTouches[0];
                        x = touch.pageX;
                        y = touch.pageY;
                    }

                    const myTextArea = this.$refs.myTextArea;
                    const width = myTextArea.clientWidth;
                    const height = myTextArea.clientHeight;
                    const right = myTextArea.offsetLeft + width;
                    const bottom = myTextArea.offsetTop + height;

                    if (x >= myTextArea.offsetLeft && x <= right) {
                        if (y >= myTextArea.offsetTop && y <= bottom) {
                            myTextArea.value = event.args.label;
                        }
                    }
                }
            },
            dragStartTreeA: function (event) {
                this.onDragStart(event);
            },
            dragEndTreeA: function (event) {
                this.onDragEnd(event);
            },
            dragStartTreeB: function (event) {
                this.onDragStart(event);
            },
            dragEndTreeB: function (event) {
                this.onDragEnd(event);
            },
            dragStart: function (item) {
                if (item.label == 'Community')
                    return false;
            },
            dragEnd: function (item, dropItem, args, dropPosition, tree) {
                if (item.label == 'Forum')
                    return false;
            }
        }
    }
</script>