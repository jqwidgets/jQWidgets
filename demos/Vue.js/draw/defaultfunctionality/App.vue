<template>
    <JqxDraw style="width: 850px; height: 500px" 
             ref="myDraw">
    </JqxDraw>
</template>

<script>
    import JqxDraw from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdraw.vue";

    export default {
        components: {
            JqxDraw
        },
        mounted: function () {
            let size = this.$refs.myDraw.getSize();
            
            let circleElement = this.$refs.myDraw.circle(250, 150, 50, {});
            this.$refs.myDraw.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });

            let borderElement = this.$refs.myDraw.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });

            let pathElement = this.$refs.myDraw.path('M 100,100 L 150, 130 C 130,130 180,190 150,150', { stroke: '#777777', fill: 'red' });

            let areaElement = this.$refs.myDraw.path('M 300,300 L 350, 330 C 330,330 380,390 350,350 Z', { stroke: '#777777', fill: 'yellow' });

            this.$refs.myDraw.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
            this.$refs.myDraw.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

            this.$refs.myDraw.text('Drawing shapes', 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
            this.$refs.myDraw.text('This is rotated text', 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');

            let circleUp = this.$refs.myDraw.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
            let pathUp = this.$refs.myDraw.path('M30 460 L 70 460 L50 430 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
            let circleDown = this.$refs.myDraw.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
            let pathDown = this.$refs.myDraw.path('M100 440 L 140 440 L120 470 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
            this.$refs.myDraw.text('Click these buttons:', 20, 390);

            let moveCircle = (moveUp) => {
                let circleY = parseInt(this.$refs.myDraw.getAttr(circleElement, 'cy'));
                this.$refs.myDraw.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
            }

            this.$refs.myDraw.on(circleUp, 'click', () => { moveCircle(true); });
            this.$refs.myDraw.on(pathUp, 'click', () => { moveCircle(true); });
            this.$refs.myDraw.on(circleDown, 'click', () => { moveCircle(false); });
            this.$refs.myDraw.on(pathDown, 'click', () => { moveCircle(false); });
            this.$refs.myDraw.refresh();
        }   
    };
</script>

<style>
    
</style>