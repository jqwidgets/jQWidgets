<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Map of the European Union'"
              :description="''"
              :padding="padding" :titlePadding="titlePadding" :source="dataAdapter"
              :drawBefore="drawBefore" :draw="draw">
    </JqxChart>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 }
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'id' },
                    { name: 'path' },
                    { name: 'europe' },
                    { name: 'eu' }
                ],
                /* EU map definitions in JSON derived from  http://commons.wikimedia.org/wiki/File:116_000_map_of_Europe.svg */
                url: 'europe.txt'
            };
        },
        methods: {
            drawBefore: function (renderer, rect) {
                renderer.rect(rect.x, rect.y, rect.width, rect.height, { fill: 'lightblue' });
            },
            draw: function (renderer, rect) {
                let records = this.dataAdapter.records;
                let wScale = rect.width / 13000
                let hScale = (rect.height) / 8500;

                for (let i = 0; i < records.length; i++) {
                    let path = this.transformPath(records[i].path, wScale, hScale, 62, 22);
                    let pathElement = renderer.path(path, { stroke: 'black' });
                    if (records[i].eu == 'true') {
                        renderer.attr(pathElement, { fill: 'blue' });
                    }
                    else {
                        renderer.attr(pathElement, { fill: '#DEDEDE' });
                    }
                }
            },
            transformPath: function (path, wScale, hScale, xOffset, yOffset) {
                let output = '';
                for (let i = 0; i < path.length; i++) {
                    if (path[i] == 'C' || path[i] == 'M' || path[i] == 'L') {
                        output += path[i];
                        i++;

                        let j = i;
                        while (j + 1 < path.length && !(path[j + 1] == 'C' || path[j + 1] == 'M' || path[j + 1] == 'L' || path[j + 1] == 'z'))
                            j++;
                        let value = path.substring(i, j);
                        let pointsString = value.split(' ');
                        for (let s = 0; s < pointsString.length; s++) {
                            if (pointsString[s].length == 0)
                                continue;
                            let pointString = pointsString[s].split(',');
                            let point = { x: pointString[0], y: pointString[1] };
                            point.x = point.x * wScale + xOffset;
                            point.y = point.y * hScale + yOffset;
                            output += ' ' + point.x + ',' + point.y + ' ';
                        }
                        i = j - 1;
                    }
                    else {
                        output += path[i];
                    }
                }
                return output;
            }
        }
    };
</script>

<style>
</style>